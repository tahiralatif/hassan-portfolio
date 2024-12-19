




// Function to dynamically add projects to the 'projects' section
function renderProjects() {
  let projects = document.querySelector("#projects .row");
  let projectData = [
    {
      title: "engraving operation of cf",
      discrption:
        "Advanced CF engraving operation delivering unmatched precision, seamless detailing, and exceptional durability.",
      otherText: ``,
      overlay: false,
    },
    {
      title: "upper side  Die",
      discrption:
        "Advanced upper side die, designed for superior precision, durability, and flawless performance in critical operation.",
      otherText: ``,
      overlay: false,
    },
    {
      title: "Assembly data prograssive Die  2 stations",
      discrption:
        "Two-station progressive die assembly for efficient and precise component manufacturing.",
      otherText: ``,
      overlay: false,
    },
    {
      title: "Bending progressive Assembly Bending",
      discrption:
        "Two-station bending progressive die for streamlined, precise bending and shaping operations.",
      otherText: ``,
      overlay: false,
    },
    {
      title: "Bike light cover with punch and civity",
      discrption:
        "Bike light cover with punching and cavity process for precise shaping and durability.",
      otherText: ``,
      overlay: false,
    },
    {
      title: "Tank cover part",
      discrption:
        "Tank cover part designed for durability and perfect fit, ensuring optimal protection and performance.",
      otherText: ``,
      overlay: false,
    },
    {
      title: "Banding Lower Die",
      discrption:
        "Precision-crafted banding lower die, ensuring optimal performance, durability, and reliability for mechanical applications.",
      otherText: ``,
      overlay: false,
    },
    {
      title: "T slot cutter operation",
      discrption:
        "T-slot cutter operation creates precise T-shaped slots in workpieces, commonly used for clamping tools and fixtures on machine tables.",
      otherText: "",
      overlay: false,
    },
    {
      title: "Upper side forming process",
      discrption:
        "The purpose of a forming die is to shape or mold materials into specific designs through mechanical force or pressure.",
      otherText: "",
      overlay: false,
    },
    {
      title: "Roughing Process",
      discrption:
        "Quick material removal for a solid foundation.",
      otherText: " View details",
      overlay: true,
    },
  ];


  // Clear previous content
  projects.innerHTML = "";

  // Iterate over projectData and build HTML for each project
  projectData.forEach((project, index) => {
    let projectHTML = `
      <div class="col-lg-6">
        <div class="card mb-3 border-0" style="max-width: 540px" data-overlay="${project.overlay}" data-index="${index}">
          <div class="row g-0">
            <div class="col-md-4 py-1">
              <img src="images/${project.title}.jpeg" class="img-fluid" alt="${project.title}" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fw-bold text-uppercase">${project.title}</h5>
                <p class="card-text">${project.discrption}</p>
                <p class="card-text"><small class="text-body-secondary">${project.otherText}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    projects.innerHTML += projectHTML;
  });

  // Add click event for projects with overlays
  document.querySelectorAll('[data-overlay="true"]').forEach((card) => {
    card.addEventListener("click", () => {
      const projectIndex = card.getAttribute("data-index");
      renderOverlay(projectData[projectIndex]);
    });
  });
}

// Function to render overlay content
function renderOverlay(project) {
  let overlayDiv = document.querySelector("#overlay .row");
  document.querySelector("#overlay").style.display = "block";

  let overlayHTML = `
    <div class="col-lg-12 text-center">
      <h3 class="fw-bold">${project.title}</h3>
      <p>${project.discrption}</p>
    </div>
  `;

  overlayDiv.innerHTML = overlayHTML;

  // Additional logic for specific projects
  if (project.title === "Roughing Process") {
    let roughingDetails = [
      {
        title: "Operation 01",
        discrption: "Roughing Process",
        otherText: "Quick material removal for a solid foundation.",
      },
      {
        title: "Operation 02",
        discrption: "Surfacing Program",
        otherText: "Smooth, precise finishing for consistency.",
      },
      {
        title: "Operation 03",
        discrption: "Drilling Operation",
        otherText: "Accurate holes for perfect fit.",
      },
    ];

    roughingDetails.forEach((detail) => {
      overlayHTML += `
        <div class="col-lg-6 text-white">
          <div class="card text-white mb-3 border-0" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4 py-1">
                <img src="images/${detail.title}.jpeg" class="img-fluid" alt="${detail.title}" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title fw-bold">${detail.title}</h5>
                  <p>${detail.discrption}</p>
                  <p><small class="text-body-light">${detail.otherText}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    overlayDiv.innerHTML = overlayHTML;
  }
}

// Close overlay
document.querySelector(".overlay-cross").addEventListener("click", () => {
  document.querySelector("#overlay").style.display = "none";
});

// Call the function to render projects
renderProjects();
