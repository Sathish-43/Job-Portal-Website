$(".card").on("click",function(){
    $(".detail").addClass("active");
});

$(".close-detail").on("click",function(){
    $(".detail").removeClass("active")
});

$(".menu-bar").on("click",function(){
   $(".sidebar").addClass("active")
});

$(".logo").on("click",function(){
    $(".sidebar").removeClass("active")
});

$(document).ready(function(){
    // Function to handle job search
    $("#job-search").on("keyup", function() {
        var searchText = $(this).val().toLowerCase(); // Get the entered search text
        $(".card").each(function() {
            var jobTitle = $(this).find("h3").text().toLowerCase(); // Get job title
            if (jobTitle.includes(searchText)) {
                $(this).show(); // Show the job card if it matches the search query
            } else {
                $(this).hide(); // Hide the job card if it doesn't match
            }
        });
    });

    // Open job details on card click
    $(".card").on("click",function(){
        $(".detail").addClass("active");
    });

    // Close job details
    $(".close-detail").on("click",function(){
        $(".detail").removeClass("active");
    });

    // Toggle sidebar on menu icon click
    $(".menu-bar").on("click",function(){
       $(".sidebar").addClass("active");
    });

    // Close sidebar on logo click
    $(".logo").on("click",function(){
        $(".sidebar").removeClass("active");
    });
});

$(document).ready(function(){
    // Function to handle job search
    $("#job-search").on("keyup", function() {
        var searchText = $(this).val().toLowerCase(); // Get the entered search text
        $(".card").each(function() {
            var jobTitle = $(this).find("h3").text().toLowerCase(); // Get job title
            if (jobTitle.includes(searchText)) {
                $(this).show(); // Show the job card if it matches the search query
            } else {
                $(this).hide(); // Hide the job card if it doesn't match
            }
        });
    });

    // Open job details on card click
    $(".card").on("click",function(){
        $(".detail").addClass("active");
    });

    // Close job details
    $(".close-detail").on("click",function(){
        $(".detail").removeClass("active");
    });

    // Toggle sidebar on menu icon click
    $(".menu-bar").on("click",function(){
       $(".sidebar").addClass("active");
    });

    // Close sidebar on logo click
    $(".logo").on("click",function(){
        $(".sidebar").removeClass("active");
    });
});

// Define job descriptions with experience level and salary
const jobDescriptions = {
    amazon: {
        title: "Amazon",
        description: "Amazon is a multinational technology company focusing on e-commerce, cloud computing, and digital streaming.",
        image: "https://cdn.iconscout.com/icon/free/png-256/free-amazon-68-722671.png?f=webp",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Experience with cloud computing platforms like AWS",
            "Strong problem-solving skills"
        ],
        experience: "2+",
        salary: 450
    },
    netflix: {
        title: "Netflix",
        description: "Netflix is a global provider of streaming movies and TV series, including original content.",
        image: "https://cdn.icon-icons.com/icons2/3053/PNG/512/netflix_macos_bigsur_icon_189917.png",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Skills Required to Programming,Databases,Big Data.",
            "Learn automation and scripting "
        ],
        experience: "0-2", 
        salary: 400
    },
    zoho: {
        title: "ZOHO",
        
        description: "ZOHO Corporation is an Indian software development company that focuses on web-based business tools and information technology solutions.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ZOHO.svg/1024px-ZOHO.svg.png",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Strong in any one Programming Like C,Java,C++,etc.",
            "Strong problem-solving skills"
        ],
        experience: "2+",
        salary: 420
    },
    apple: {
        title: "Apple",
        description: "Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.",
        image: "https://cdn-icons-png.flaticon.com/512/0/747.png",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Experience with iOS app development",
            "Knowledge of Android Studio , Flutter and Ionic"
        ],
        experience: "0-2",
        salary: 520
    },
    wipro: {
        title: "Wipro",
        description: "Wipro Limited is an Indian multinational corporation that provides information technology, consulting, and business process services.",
        image: "https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Experience with software development and DevOps practices",
            "Ability to work in a team environment"
        ],
        experience: "2+",
        salary: 380
    },
  netflix1: {
        title: "Netflix",
        description: "Netflix is a global provider of streaming movies and TV series, including original content.",
        image: "https://cdn.icon-icons.com/icons2/3053/PNG/512/netflix_macos_bigsur_icon_189917.png",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Experience with UI/UX design",
            "Familiarity with front-end technologies like HTML, CSS, and JavaScript"
        ],
        experience: "0-2",
        salary: 150
    },
    zoho1: {
        title: "ZOHO",
        description: "ZOHO Corporation is an Indian software development company that focuses on web-based business tools and information technology solutions.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ZOHO.svg/1024px-ZOHO.svg.png",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Experience with cloud computing and DevOps tools",
            "Strong problem-solving skills"
        ],
        experience: "0-2",
        salary: 320
    },
    apple1: {
        title: "Apple",
        description: "Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.",
        image: "https://cdn-icons-png.flaticon.com/512/0/747.png",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Experience with iOS app development",
            "Knowledge of Programming and Data Structures"
        ],
        experience: "0-2",
        salary: 520
    }
  
};

// Function to load job description based on clicked job
function loadJobDescription(jobId) {
    const description = jobDescriptions[jobId];
    if (description) {
        $(".detail-header h2").text(description.title);
        $(".about p").text(description.description);
        $(".detail-header img").attr("src", description.image);

        // Clear previous qualifications, experience, and salary
        $(".qualification ul").empty();
        $(".experience").text("");
        $(".salary").text("");

        // Add qualifications
        description.qualifications.forEach(qualification => {
            $(".qualification ul").append(`<li>${qualification}</li>`);
        });

        // Add experience requirement
        $(".experience").text(`Experience: ${description.experience}`);

        // Add salary information
        $(".salary").text(`Salary: $${description.salary}k / Year`);

        // Show the job details panel
        $(".detail").addClass("active");
    }
}

// Event listener for clicking on job cards
$(".card").on("click", function() {
    const jobId = $(this).attr("id"); // Get the ID of the clicked job card
    loadJobDescription(jobId); // Load job description based on ID
});

// Event listener for select dropdown change
$("select").on("change", function() {
    const selectedValue = $(this).val();
    $(".card").hide(); // Hide all job cards

    // Show job cards based on selected experience level or salary range
    if (selectedValue === "0") {
        $(".card").show(); // Show all jobs
    } else if (selectedValue === "1") {
        $(".card").each(function() {
            const jobId = $(this).attr("id");
            if (jobDescriptions[jobId].experience === "0-2") {
                $(this).show(); // Show jobs with 0-2 years experience
            }
        });
    } else if (selectedValue === "2") {
        $(".card").each(function() {
            const jobId = $(this).attr("id");
            if (jobDescriptions[jobId].experience === "2+") {
                $(this).show(); // Show jobs with 2+ years experience
            }
        });
    } else if (selectedValue === "4") {
        $(".card").each(function() {
            const jobId = $(this).attr("id");
            if (jobDescriptions[jobId].salary >= 100 && jobDescriptions[jobId].salary < 400) {
                $(this).show(); // Show jobs with salary between 100k and 399k
            }
        });
    } else if (selectedValue === "5") {
        $(".card").each(function() {
            const jobId = $(this).attr("id");
            if (jobDescriptions[jobId].salary >= 400) {
                $(this).show(); // Show jobs with salary 400k+
            }
        });
    }
});

function fun(){
    alert("Congragulation Applied for Job")
}


