import json
import pandas as pd
import numpy as np
import calendar as cldr
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
# with open('data/station_03431083.json', 'r') as f:
#     data = json.load(f)

# Get data
path = "E:/!!Files_G partially 07072023/Python/Diurnal_turbidity/"

# Specify the path to the file
turb_file_path = 'data/badgerCreek452737122231400.csv'
# turb_file_path = 'data/johnsonCreek452737122194200.csv'
# turb_file_path = 'data/johnsonCreek452746122220200.csv'
# turb_file_path = 'data/johnsonCreek452753122233100.csv'
# turb_file_path = 'data/JohnsonCreek452758122234300.csv'

# Read the csv file
data = pd.read_csv(turb_file_path)

# Convert the JSON data to a pandas DataFrame
df = pd.DataFrame(data)

# Move the entire column with values one row down to match first column
df.iloc[:, 1] = df.iloc[:, 1].shift(1)

# Convert datetime column to actual date and time type
df['datetime'] = pd.to_datetime(df['datetime'])

# Extract the numeric month from the 'dateTime' column
df['month_num'] = df['datetime'].dt.month

# Extract the month from the 'dateTime' column and save as month abbreviation
df['month'] = df['datetime'].dt.strftime('%b')

# Define a mapping of months to seasons
month_to_season = {
    'Jan': 'Winter', 'Feb': 'Winter', 'Mar': 'Spring', 'Apr': 'Spring', 'May': 'Spring',
    'Jun': 'Summer', 'Jul': 'Summer', 'Aug': 'Summer', 'Sep': 'Fall', 'Oct': 'Fall',
    'Nov': 'Fall', 'Dec': 'Winter'
}

# Create the 'season' column based on the 'month' column
df['season'] = df['month'].map(month_to_season)

# take value column, put its name into the first cell, and rename the column


def rename_second_column_and_set_first_value(df, new_name):
    # Get the name of the second column
    second_col_name = df.columns[1]

    # Set the column name as the first value in the second column
    df.iloc[0, 1] = second_col_name

    # Rename the second column to the new name
    df.rename(columns={second_col_name: new_name}, inplace=True)


# Apply the function to the DataFrame, renaming the second column to 'new_name'
rename_second_column_and_set_first_value(df, 'turbidity')

# Convert turbidity to numeric format
df['turbidity'] = pd.to_numeric(df['turbidity'])

# Remove NAs
df = df.dropna(subset=['turbidity'])

# Define the desired order of months
month_order = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
               'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

# Define the desired order of months
season_order = ['Spring', 'Summer', 'Fall', 'Winter']

# Quick stats
# Calculate median turbidity for each month
median_turbidity = df.groupby(
    'month_num')['turbidity'].median().reset_index()
median_turbidity['month'] = median_turbidity['month_num'].apply(
    lambda x: cldr.month_abbr[x])

# Calculate min turbidity for each month
min_turbidity = df.groupby(
    'month_num')['turbidity'].min().reset_index()
min_turbidity['month'] = min_turbidity['month_num'].apply(
    lambda x: cldr.month_abbr[x])

# Calculate max turbidity for each month
max_turbidity = df.groupby(
    'month_num')['turbidity'].min().reset_index()
max_turbidity['month'] = max_turbidity['month_num'].apply(
    lambda x: cldr.month_abbr[x])

# Graph: box plot by month
# Create the boxplot
plt.figure(figsize=(12, 6))

# Boxplot by month
sns.boxplot(data=df, x="month", y="turbidity",
            order=month_order,
            width=.5, color="#fad250", linecolor="#c24a00", linewidth=.75)

# Add a trendline
sns.lineplot(data=median_turbidity, x='month', y='turbidity',
             color='#401f05', marker='o', linestyle='--')

# Set x-ticks to show month names
plt.xticks(ticks=np.arange(len(month_order)),
           labels=month_order)  # rotation=45

# Set y-axis to log scale
plt.yscale('log')

# Set axis labels
plt.xlabel("")
plt.ylabel("Turbidity (FTU)")

# Show the plot
plt.show()

# Save the plot
# Save the plot to the static directory #static/
plt.savefig('turb_monthly.png')

# Graph: box plot by season
# Define the desired order of months
season_order = ['Spring', 'Summer', 'Fall', 'Winter']

# Create the boxplot
plt.figure(figsize=(12, 6))

# Boxplot by month
sns.boxplot(data=df, x="season", y="turbidity",
            order=season_order,
            width=.5, color="#9df268", linecolor="#364f26", linewidth=.75)

# Calculate the mean turbidity for each month
median_turbidity = df.groupby(
    'season')['turbidity'].median().reset_index()

# Add a trendline
sns.lineplot(data=median_turbidity, x='season', y='turbidity',
             color='#153302', marker='o', linestyle='--')

# Set x-ticks to show season names
plt.xticks(ticks=np.arange(len(season_order)),
           labels=season_order)  # rotation=45

# Set y-axis to log scale
plt.yscale('log')

# Set axis labels
plt.xlabel("")
plt.ylabel("Turbidity (FTU)")

# Show the plot
plt.show()

# Save the plot to the static directory
plt.savefig('turb_seasonal.png')  # static/