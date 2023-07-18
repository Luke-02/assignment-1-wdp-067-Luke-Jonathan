// Sample job data (replace this with your actual data)
let jobs = [
    { title: "Software Engineer", location: "New York", company: "TechCo" },
    { title: "Frontend Developer", location: "San Francisco", company: "WebDev Solutions" },
    // Add more jobs here
];

function displayJobs(jobsList) {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";

    jobsList.forEach((job) => {
        const listItem = document.createElement("li");
        listItem.classList.add("jobItem");
        listItem.innerHTML = `
            <strong>${job.title}</strong> - ${job.company}, ${job.location}
        `;
        jobList.appendChild(listItem);
    });
}

function filterJobs() {
    const jobTitleInput = document.getElementById("jobTitle");
    const filterTitle = jobTitleInput.value.toLowerCase();

    // Apply other filters based on your additional fields

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(filterTitle)
    );

    displayJobs(filteredJobs);
}

function resetFilters() {
    const jobTitleInput = document.getElementById("jobTitle");
    jobTitleInput.value = "";

    // Clear other filters as well

    displayJobs(jobs); // Reset to show all jobs
}

function addJob(event) {
    event.preventDefault();

    const newJobTitle = document.getElementById("newJobTitle").value;
    const newJobCompany = document.getElementById("newJobCompany").value;
    const newJobLocation = document.getElementById("newJobLocation").value;

    if (!newJobTitle || !newJobCompany || !newJobLocation) {
        alert("Please fill out all fields before adding a new job.");
        return;
    }

    const newJob = {
        title: newJobTitle,
        company: newJobCompany,
        location: newJobLocation,
    };

    jobs.push(newJob);
    displayJobs(jobs);

    // Clear the input fields after adding the job
    document.getElementById("addJobForm").reset();
}

// Event listener to call addJob function when the form is submitted
document.getElementById("addJobForm").addEventListener("submit", addJob);

// Initial display of all jobs
displayJobs(jobs);
