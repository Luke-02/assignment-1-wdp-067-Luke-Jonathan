const API_KEY = 'your_rapidapi_key';

async function fetchCountries() {
  const url = 'https://covid-193.p.rapidapi.com/countries';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchStatistics(country) {
  const url = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Function to update the country dropdown with fetched countries
async function updateCountryDropdown(countries) {
  const countrySelect = document.getElementById('country-select');
  countrySelect.innerHTML = countries.map(country => `<option>${country}</option>`).join('');
}

// Function to update the data table with statistics data
function updateDataTable(data) {
  const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];
  dataTable.innerHTML = data;

  // Select all td elements in the table and set their text color to white
  const tableCells = dataTable.querySelectorAll('td');
  for (const cell of tableCells) {
    cell.style.color = 'white';
  }
}

// Fetch and display statistics data for all countries
async function fetchAndDisplayAllCountriesStatistics() {
  const countriesData = await fetchCountries();
  const countries = JSON.parse(countriesData).response;

  let allData = '';

  for (const country of countries) {
    if (country !== 'All Countries') {
      const statisticsData = await fetchStatistics(country);
      const jsonData = JSON.parse(statisticsData).response[0];

      allData += `
        <tr>
          <td>${jsonData.country}</td>
          <td>${jsonData.cases.active}</td>
          <td>${jsonData.cases.new}</td>
          <td>${jsonData.cases.recovered}</td>
          <td>${jsonData.cases.total}</td>
          <td>${jsonData.deaths.total}</td>
          <td>${jsonData.tests.total}</td>
        </tr>
      `;
    }
  }

  updateDataTable(allData);
}

// Function to fetch and display statistics data for the selected country
async function fetchAndDisplayStatisticsForCountry(selectedCountry) {
  const statisticsData = await fetchStatistics(selectedCountry);
  const jsonData = JSON.parse(statisticsData).response[0];

  const newRow = `
    <tr>
        <td>${jsonData.country}</td>
        <td>${jsonData.cases.active}</td>
        <td>${jsonData.cases.new}</td>
        <td>${jsonData.cases.recovered}</td>
        <td>${jsonData.cases.total}</td>
        <td>${jsonData.deaths.total}</td>
        <td>${jsonData.tests.total}</td>
    </tr>
  `;

  updateDataTable(newRow);
}

// Fetch and display countries data
async function fetchAndDisplayCountries() {
  const countriesData = await fetchCountries();
  const countries = JSON.parse(countriesData).response;
  countries.unshift('All Countries'); // Add "All Countries" option
  await updateCountryDropdown(countries);

  const countrySelect = document.getElementById('country-select');
  countrySelect.addEventListener('change', async function() {
    const selectedCountry = this.value;
    if (selectedCountry === 'All Countries') {
      await fetchAndDisplayAllCountriesStatistics();
    } else {
      fetchAndDisplayStatisticsForCountry(selectedCountry);
    }
  });
}

// Call function to fetch and display countries data when the page loads
window.onload = async function () {
  await fetchAndDisplayCountries();
};