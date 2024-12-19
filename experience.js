let experience = document.querySelector("#Experience");
experience.innerHTML = ` <div class="row py-2">
          <!-- First Column for Professional Experience -->
          <div class="col-lg-3 py-5 px-5">
            <h1 class="text-center py-5 bg-dark text-white sm-rounded-0 rounded-circle">
              Professional Experience
            </h1>
          </div>
        
          <!-- Second Column with Three Sub-columns (Each 4 out of 12 columns) -->
          <div class="col-lg-8 m-1">
            <div class="row d-flex">
              <!-- First Sub-column for Brother Industries -->
              <div class="col-lg-6 bg-grey p-3">
                <ul>
                  <li>
                    <strong>Brother Industries (Dec 2023 – Ongoing)</strong><br />
                    <strong>Supervisor of CNC Department</strong>
                    <ul>
                      <li>CNC Programming and working in Moulds.</li>
                      <li>Reworking of Mould Jigs and Fixtures.</li>
                      <li>Ensuring precision and accuracy in all projects.</li>
                      <li>Collaborating with engineers and quality control teams to resolve issues.</li>
                    </ul>
                  </li>
                </ul>
              </div>
        
              <!-- Second Sub-column for Dawood Engineering Pvt. Ltd. -->
              <div class="col-lg-6 bg-grey p-3 b-left">
                <ul>
                  <li>
                    <strong>Dawood Engineering Pvt. Ltd. (Apr 2021 – Dec 2021)</strong><br />
                    <strong>CNC Operator</strong>
                    <ul>
                      <li>Handling CNC lathe and milling operations.</li>
                      <li>Performing job dialing and offsetting.</li>
                      <li>Managing manual programming and quality inspection.</li>
                    </ul>
                  </li>
                </ul>
              </div>
        
              <!-- Third Sub-column for Procon Engineering -->
              <div class="col-lg-12 mt-1 bg-grey">
                <ul>
                  <li>
                    <strong><a href="images/certi.jpeg" target="_blank" class="text-black">Procon Engineering (Jan 2022 – Oct 2023)</a></strong><br />
                    <strong>CNC Shift Incharge</strong>
                    <ul>
                      <li>Cam Programming in Siemens NX 12.0.</li>
                      <li>Job dialing and offsetting.</li>
                      <li>Managing manual programming.</li>
                      <li>Supervising CNC operators for lathe and milling.</li>
                      <li>Ensuring job quality inspection.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;

// Function to dynamically add files to the 'files' section
function renderFiles() {
  let files = document.querySelector("#files .row");
  let filesData = [
    {
      imgSrc: `resume`,
      title: `Curriculum Vitae (CV)`,
      docs: "Hassan latif",
    },
    {
      imgSrc: `graduation cap`,
      title: `Diploma of Associate Engineer`,
      docs: "DAE",
    },
    {
      imgSrc: `school building`,
      title: `Secondary School Certificate`,
      docs: "matric Marksheet",
    },
    {
      imgSrc: `Wrench or Gear`,
      title: `National Vocational Degree in CNC`,
      docs: "hunar Certificate",
    },
  ];

  // Clear previous content
  files.innerHTML = "";

  // Iterate over filesData and build HTML for each file
  filesData.forEach((file) => {
    let fileHTML = `
            <div class="col-lg-3 py-1 col-md-6">
                <div class="card">
                    <div class="card-body py-1">
                        <span class="card-title d-flex px-4 justify-content-center">
                        <a href="images/${file.docs}.pdf" target="_blank">
                            <img src="images/${file.imgSrc}.png" alt="${file.title}" class="img-fluid">
                            </a>
                        </span>
                        <p class="card-text text-center">
                            <a class="text-black" href="images/${file.docs}.pdf" target="_blank">${file.title}</a>
                        </p>
                    </div>
                </div>
            </div>
        `;

    // Append the HTML for this file
    files.innerHTML += fileHTML;
  });
}

// Call the function to render files
renderFiles();
