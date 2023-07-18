// Sample job data (replace this with your actual data)
// Sample job data (replace this with your actual data)
let jobs = [
    { title: "Software Engineer", location: "New York", company: "TechCo", description:"we are in need of software engineer right now." },
    { title: "Frontend Developer", location: "San Francisco", company: "WebDev Solutions", description:"we are in need of a web developer right now." },
    // Add more jobs here
];

function displayJobs(jobsList) {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";

    jobsList.forEach((job) => {
        const listItem = document.createElement("li");
        listItem.classList.add("col-md-6", "col-lg-4"); // Bootstrap column classes
        listItem.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${job.title}</h5>
                    <p class="card-text">${job.company}</p>
                    <p class="card-text">${job.location}</p>
                    <p class="card-text">${job.description}</p>
                </div>
            </div>
        `;
        jobList.appendChild(listItem);
    });
}

function filterJobs() {
    const jobTitleInput = document.getElementById("jobTitle");
    const jobLocationInput = document.getElementById("jobLocation");
    const jobCompanyInput = document.getElementById("jobCompany");

    const filterTitle = jobTitleInput.value.toLowerCase();
    const filterLocation = jobLocationInput.value.toLowerCase();
    const filterCompany = jobCompanyInput.value.toLowerCase();

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(filterTitle) &&
        job.location.toLowerCase().includes(filterLocation) &&
        job.company.toLowerCase().includes(filterCompany)
    );

    displayJobs(filteredJobs);
}

function resetFilters() {
    document.getElementById("jobTitle").value = "";
    document.getElementById("jobLocation").value = "";
    document.getElementById("jobCompany").value = "";

    // Clear other filters as well

    displayJobs(jobs); // Reset to show all jobs
}

function addJob(event) {
    event.preventDefault();

    const newJobTitle = document.getElementById("newJobTitle").value;
    const newJobCompany = document.getElementById("newJobCompany").value;
    const newJobLocation = document.getElementById("newJobLocation").value;
    const newJobDescription = document.getElementById("newJobDescription").value;

    if (!newJobTitle || !newJobCompany || !newJobLocation || !newJobDescription) {
        alert("Please fill out all fields before adding a new job.");
        return;
    }

    const newJob = {
        title: newJobTitle,
        company: newJobCompany,
        location: newJobLocation,
        description: newJobDescription, // Added description field
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
