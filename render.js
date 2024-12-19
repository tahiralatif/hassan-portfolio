// Function to dynamically add skill cards to the skills section
function renderSkills() {
  let skillsContainer = document.querySelector("#services .row");
  let skillsData = [
    {
      icon: `ri-briefcase-line`, // Icon for "Career/Experience"
      description: `Mechanical Engineering student at Nazeer Hussain University, actively learning CNC Milling and UG NX12.0. Passionate about applying theoretical knowledge into practical skills.`,
    },
    {
      icon: `ri-macbook-line`, // Icon for "Technical Skills"
      description: `Proficient in CNC programming, tool setup, job quality inspection, and using Siemens NX software. Hands-on experience with precision machining and quality control.`,
    },
    {
      icon: `ri-mail-line`, // Icon for "Contact Information"
      description: `Feel free to reach out to discuss potential opportunities or collaborations. I can be contacted via email: 795hassanlatif@gmail.com <br/> phone: +92-3033812795.`,
    },
  ];

  let skillCardsHTML = "";

  // Loop through each skill in the skillsData array
  skillsData.forEach((skill) => {
    skillCardsHTML += `
      <div class="col-lg-4 col-md-6 mb-3">
        <div class="card border-0 bg-none py-5">
          <div class="card-body">
            <h5 class="card-title text-center"><i class="${skill.icon}"></i></h5>
            <p class="card-text text-center px-4">
              ${skill.description}
            </p>
          </div>
        </div>
      </div>`;
  });

  // Append the new skill cards to the existing content
  skillsContainer.innerHTML += skillCardsHTML;
}

renderSkills();

// Function to dynamically add competency skills to the 'comp-skills' section
function renderCompetencySkills() {
  let competencySkillsContainer = document.querySelector("#comp-skills");
  let competencySkillsData = [
    {
      imgSrc: `https://www.bhinneka.com/blog/wp-content/uploads/2022/07/Microsoft-Office-Word.webp`,
      title: `MS Word`,
    },
    {
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU1PZmf0KMijbU6nYM_yyRYmI_v3zit5K6CeG-rRnkBAFojuEXnbgHp1eePGccCvHwf4&usqp=CAU`,
      title: `MS Excel`,
    },
    {
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwB3fFFl3_7cKfimOjcEePNd31qW1hP_XwDA&s`,
      title: "MS Powerpoint",
    },
    {
      imgSrc: `https://content.jdmagicbox.com/quickquotes/images_main/autocad-graphic-design-computer-and-laptop-software-2220643820-jihv4cuo.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit`,
      title: "AutoCAD",
    },
    {
      imgSrc: `https://handwiki.org/wiki/images/5/51/Siemens_NX_Logo.png`,
      title: "UG NX12.0",
    },
  ];

  let competencySkillsHTML = "";
  competencySkillsData.forEach(
    (skill) =>
      (competencySkillsHTML += `
        <div class="col-lg-4 py-1 col-md-6">
          <div class="card">
            <div class="card-body py-1">
              <span class="card-title d-flex px-4 justify-content-center">
                <img src="${skill.imgSrc}" alt="">
              </span>
              <p class="card-text text-center">
                <strong>${skill.title}</strong>
              </p>
            </div>
          </div>
        </div>`)
  );

  competencySkillsContainer.innerHTML = competencySkillsHTML;
}

renderCompetencySkills();

// Function to dynamically add skills-related skills to the 'skills' section
function renderskillsSkills() {
  let skillsSkillsContainer = document.querySelector("#skills ul");
  let skillsSkillsData = [
    {
      icon: `ri-settings-2-line`,
      description: `Extensive experience in a Tool Room environment.`,
    },
    {
      icon: `ri-tools-line`,
      description: `Proficient in CNC Milling and CNC Lathe operations.`,
    },
    {
      icon: `ri-compasses-2-line`,
      description: `Knowledgeable in machining methods and precision instruments.`,
    },
    {
      icon: `ri-settings-6-line`,
      description: `Proficient in UG NX12.0 and CAM programming.`,
    },
    {
      icon: `ri-clockwise-line`,
      description: `Ability to work under pressure and meet tight deadlines.`,
    },
    {
      icon: `ri-tools-line`,
      description: `Skilled in tool setup, CNC programming, and quality control.`,
    },
    {
      icon: `ri-code-s-slash-line`,
      description: `Hands-on experience with manual programming and CAM software (Siemens NX 12.0).`,
    },
    {
      icon: `ri-check-line`,
      description: `Experience in job quality inspection and ensuring high precision.`,
    },
  ];

  let skillsSkillsHTML = "";
  skillsSkillsData.forEach((skill) => {
    skillsSkillsHTML += `<li><i class="${skill.icon}"></i> ${skill.description}</li>`;
  });

  skillsSkillsContainer.innerHTML = skillsSkillsHTML; // Update the ul element's HTML
}

renderskillsSkills();

// Function to dynamically add education list items
function renderEducation() {
  let educationContainer = document.querySelector("#education-ul");
  let educationData = [
    {
      degree: "BS in Mechanical Engineering (2024 – ongoing)",
      institution: "Nazeer Hussain University",
    },
    {
      degree: "Advanced Mechanical Level 4 Course (2021)",
      institution: "The Hunar Foundation",
    },
    {
      degree: "D.A.E. in Mechanical Engineering (2021)",
      institution: "Sindh Board of Technical Education",
    },
    {
      degree: "Matriculation in Computer Science (2018)",
      institution: "Sindh Board of Karachi",
    },
  ];

  let educationHTML = "";
  educationData.forEach((item) => {
    educationHTML += `
      <li>
        ${item.degree} <br />
        <ul>
        <li>
        ${item.institution}
        </li>
        </ul>
      </li>`;
  });

  educationContainer.innerHTML = educationHTML; // Update the ul element's HTML
}

renderEducation();
