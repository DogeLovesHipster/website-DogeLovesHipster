#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Load packages
import pandas as pd
import numpy as np
import calendar as cldr
from pandas import Series
from matplotlib import pyplot
from statsmodels.tsa.seasonal import seasonal_decompose
import matplotlib.pyplot as plt
import seaborn as sns
import os


# In[2]:


def rename_second_column_and_set_first_value(df, new_name):
    # Get the name of the second column
    second_col_name = df.columns[1]

    # Set the column name as the first value in the second column
    df.iloc[0, 1] = second_col_name

    # Rename the second column to the new name
    df.rename(columns={second_col_name: new_name}, inplace=True)


# In[4]:


# Get data from small time scale file
path = "E:/!!Files_G partially 07072023/Python/Diurnal_turbidity/"

# Specify the path to the file
# turb_file_path = 'data/badgerCreek452737122231400.csv'
# turb_file_path = 'data/johnsonCreek452737122194200.csv'
# turb_file_path = 'data/johnsonCreek452746122220200.csv'
turb_file_path = 'data/johnsonCreek452753122233100.csv'
# turb_file_path = 'data/johnsonCreek452758122234300.csv'

# Read the csv file
df = pd.read_csv(turb_file_path)

# Move the entire column with values one row down to match first column
df.iloc[:, 1] = df.iloc[:, 1].shift(1)

# Convert datetime column to actual date and time type
df['datetime'] = pd.to_datetime(df['datetime'])

# Extract the numeric month from the 'dateTime' column
df['month_num'] = df['datetime'].dt.month

# Extract the month from the 'dateTime' column and save as month abbreviation
df['month'] = df['datetime'].dt.strftime('%b')


# In[5]:


# Apply the function to the DataFrame, renaming the second column to 'new_name'
rename_second_column_and_set_first_value(df, 'turbidity')


# In[6]:


# Data preparation

# Convert turbidity to numeric format
df['turbidity'] = pd.to_numeric(df['turbidity'], errors='coerce')

# Remove NAs
df = df.dropna(subset=['turbidity'])

# Define a mapping of months to seasons
month_to_season = {
    'Jan': 'Winter', 'Feb': 'Winter', 'Mar': 'Spring', 'Apr': 'Spring', 'May': 'Spring',
    'Jun': 'Summer', 'Jul': 'Summer', 'Aug': 'Summer', 'Sep': 'Fall', 'Oct': 'Fall',
    'Nov': 'Fall', 'Dec': 'Winter'
}

# Create the 'season' column based on the 'month' column
df['season'] = df['month'].map(month_to_season)


# In[10]:


# Prepare data for the Time Series Decomposition

# Drop duplicates
df_prepared = df.drop_duplicates(subset=['datetime'])

# Pick one year
# filtered_df['year'] = df_prepared['datetime'].dt.year
# filtered_df = filtered_df[(filtered_df['year'] == '2022')]

# Generate a complete date range
full_date_range = pd.date_range(
    start=df_prepared['datetime'].min(), end=df_prepared['datetime'].max(), freq='D')

# Identify missing dates
missing_dates = full_date_range.difference(df_prepared['datetime'])
# print("Missing dates:")
# print(missing_dates)

# Reindex the dataframe to include all dates in the full date range
df_prepared = df_prepared.set_index(
    'datetime').reindex(full_date_range).reset_index()

# Rename columns back to original names
df_prepared.columns = ['datetime', 'turbidity', 'month_num', 'month', 'season']

# Reassign numeric month from the 'datetime' column
df_prepared['month_num'] = df['datetime'].dt.month

# Convert month column back to int64
df_prepared['month_num'] = df['month_num'].astype('int64')

# Set DatetimeIndex to the df
df_prepared.set_index('datetime', inplace=True)

# Interpolate missing values
df_prepared['turbidity'] = df_prepared['turbidity'].interpolate(method='time')

# print("Dataframe with missing dates filled:")
# print(df_prepared)

# Check for remaining NaN values
# print("Remaining NaN values after interpolation:")

# In[11]:


# Time Series Decomposition

# Set series frequency to daily
series = pd.Series(df_prepared['turbidity'].values,
                   index=pd.to_datetime(df_prepared.index))


# Set series frequency to daily
series = series.asfreq('d')

# Time decomposition
result = seasonal_decompose(series, model='additive')


# In[12]:


# Plot and save the decomposition components with custom colors
fig, (ax1, ax2, ax3, ax4) = plt.subplots(4, 1, figsize=(15, 8))

result.observed.plot(ax=ax1, color='#fc6603')
ax1.set_ylabel('Observed')
ax1.set_title('Observed')
# ax1.set_xticks(np.arange(len(series.index)))
# ax1.set_xticklabels(series.index.strftime('%b'), rotation=90)

result.trend.plot(ax=ax2, color='#0a574f')
ax2.set_ylabel('Trend')
ax2.set_title('Trend')
# ax2.set_xticks(np.arange(len(series.index)))
# ax2.set_xticklabels(series.index.strftime('%b'), rotation=90)

result.seasonal.plot(ax=ax3, color='#63300e')
ax3.set_ylabel('Seasonal')
ax3.set_title('Seasonal')
# ax3.set_xticks(np.arange(len(series.index)))
# ax3.set_xticklabels(series.index.strftime('%b'), rotation=90)

result.resid.plot(ax=ax4, color='#8931e0')
ax4.set_ylabel('Residual')
ax4.set_title('Residual')
# ax4.set_xticks(np.arange(len(series.index)))
# ax4.set_xticklabels(series.index.strftime('%b'), rotation=90)

plt.tight_layout()
# plt.savefig("decomposition_plot4.png", dpi=200)
# plt.show()
base_name = os.path.basename(turb_file_path).replace('.csv', '')
output_file = os.path.join('data/cleaned', f'{base_name}_graph.png')

# Descriptive statistics
descriptive_stats = df_prepared['turbidity'].describe()
print(base_name, descriptive_stats)

plt.savefig(output_file)
plt.close()

print(f'Graph saved for {base_name} as {output_file}')
