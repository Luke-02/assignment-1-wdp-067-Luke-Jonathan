document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
    const apiKey = "YOUR_RAPIDAPI_KEY";
    const apiUrl = "https://api.covid193.com/statistics";

    fetch(apiUrl, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.response) {
            displayData(data.response);
        } else {
            console.error("No response data found.");
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}

function displayData(data) {
    const dataContainer = document.getElementById("data-container");

    data.forEach(entry => {
        const country = entry.country;
        const activeCases = entry.cases.active;
        const newCases = entry.cases.new;
        const recoveredCases = entry.cases.recovered;
        const totalCases = entry.cases.total;
        const totalDeaths = entry.deaths.total;
        const totalTests = entry.tests.total;

        const entryDiv = document.createElement("div");
        entryDiv.className = "data-entry";

        entryDiv.innerHTML = `
            <h2>${country}</h2>
            <p>Active Cases: ${activeCases}</p>
            <p>New Cases: ${newCases}</p>
            <p>Recovered Cases: ${recoveredCases}</p>
            <p>Total Cases: ${totalCases}</p>
            <p>Total Deaths: ${totalDeaths}</p>
            <p>Total Tests: ${totalTests}</p>
        `;

        dataContainer.appendChild(entryDiv);
    });
}
