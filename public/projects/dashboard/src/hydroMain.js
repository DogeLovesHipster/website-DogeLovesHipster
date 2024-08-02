const hydro = new Hydrolang();
window.clean_stations = [];

//styling functions

function showOverlay() {
  overlay.style.display = "block";
}

function hideOverlay(event) {
  if (event.target.id === "overlay") {
    overlay.style.display = "none";
  }
}

window.addEventListener("click", hideOverlay);

async function retrieveData() {
  let data = await hydro.data.retrieve({
    params: { source: "waterOneFlow", datatype: "GetSitesByBoxObject" },
    args: {
      sourceType: "USGS Unit Values",
      east: -122.3048,
      west: -123.0951,
      north: 45.7741,
      south: 45.4112,
    },
  });
  return data;
}

async function renderLocations() {
  let raw_stations = hydro.data.transform({
    params: { save: "site" },
    args: { type: "JSON" },
    data: await retrieveData(),
  });

  for (let station of raw_stations) {
    let stgProps = {};
    // console.log("Station:", station);

    // 63680 is the code for turbidity
    if (
      // station.seriesCatalog.series?.variable?.variableCode === "63680" ||
      station.siteInfo.siteName ===
        "N FK JOHNSON CR AT SPRINGWATER CORR NR GRESHAM, OR" ||
      station.siteInfo.siteName ===
        "JOHNSON CREEK AT TELFORD ROAD NEAR GRESHAM, OR" ||
      station.siteInfo.siteName ===
        "JOHNSON CREEK ABOVE SE 282ND ST, NEAR GRESHAM, OR" ||
      station.siteInfo.siteName ===
        "BADGER CREEK AT RUGG ROAD NEAR GRESHAM, OR" ||
      station.siteInfo.siteName ===
        "JOHNSON CREEK AT SE BLUFF RD, AT PLEASANT HOME, OR"
    ) {
      console.log(
        "Station",
        station.siteInfo.siteName,
        "| Variable:",
        station.seriesCatalog.series?.variable?.variableCode
      );

      stgProps.name = station.siteInfo.siteName;
      stgProps.location = station.siteInfo.geoLocation.geogLocation;
      stgProps.siteCode = station.siteInfo.siteCode;
      stgProps.variable = station.seriesCatalog.series.variable;
      stgProps.variableCode =
        station.seriesCatalog.series.variable.variableCode;
    } else {
      continue;
    }

    // stgProps.name = station.siteInfo.siteName;
    // stgProps.location = station.siteInfo.geoLocation.geogLocation;
    // stgProps.siteCode = station.siteInfo.siteCode;
    // stgProps.variable = station.seriesCatalog.series.variable;
    clean_stations.push(stgProps);
  }

  for (let station of clean_stations) {
    const button = document.createElement("button");
    button.textContent = "Retrieve Data";

    button.addEventListener("click", function () {
      retrieveValues(station.siteCode);
    });
    const popUpContent = document.createElement("div");
    popUpContent.innerHTML = `<h4>Station Information</h4>
    <ul>
      <li><strong>Name:</strong>${station.name}</li>
      <li><strong>Latitude:</strong>${station.location.latitude}</li>
      <li><strong>Longitude:</strong>${station.location.longitude}</li>
      <li><strong>Variable:</strong>${
        station.variable && station.variable.variableName
          ? station.variable.variableName
          : "NV"
      }</li>
    </ul>`;
    popUpContent.appendChild(button);
    hydro.map.Layers({
      args: {
      type: "marker",
      name: `${station.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`,
      popUp: popUpContent,
      },
      data: [
      JSON.parse(station.location.latitude),
      JSON.parse(station.location.longitude),
      ],
    });
  }
}

async function retrieveValues(site) {
  const overlay = document.getElementById("overlay");
  let chartHolder = document.getElementById("retrieved-data");
  chartHolder.innerHTML = "";
  let button = document.getElementById("download-btn");

  let usgs_query = {
    source: "usgs",
    datatype: "daily-values",
    transform: true,
  };
  let args_query = {
    site: site,
    format: "json",
    startDt: "1950-01-01",
    endDt: "2024-01-01",
  };

  let usgs_data = await hydro.data.retrieve({
    params: usgs_query,
    args: args_query,
  });
  hydro.visualize.draw({
    params: { type: "chart", id: "retrieved-data" },
    data: usgs_data,
  });
  hydro.visualize.draw({
    params: { type: "table", id: "stats-table" },
    data: hydro.analyze.stats.basicstats({ data: usgs_data }),
  });

  overlay.style.display = "block";

  button.removeAttribute("hidden");
  button.addEventListener("click", () => {
    hydro.data.download({ args: { type: "CSV" }, data: usgs_data });
  });
  showOverlay();
}

async function main() {
  hydro.map.renderMap({
    params: { maptype: "leaflet", lat: 45.5, lon: -122.3 },
  });
  renderLocations();
}

main();
