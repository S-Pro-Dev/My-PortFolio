/********_--_--_--_--*********/
/*****_- Contact Card -_******/
/*********_--_--_--_--*********/

function show() {
  const contentme = document.querySelector(".contectme");
  const showButton = document.getElementById("contact");
  const hideButton = document.getElementsByClassName("hide");

  let isContentVisible = false;

  const text = `
  <div class="Contect-Container">
    <div class="card">
      <div class="touch touch__1"></div>
      <div class="touch touch__2"></div>
      <div class="touch touch__3"></div>
      <div class="touch touch__4"></div>
      <div class="touch touch__6"></div>
      <div class="touch touch__7"></div>
      <div class="touch touch__8"></div>
      <div class="touch touch__9"></div>
      <div class="main">
        <div class="icon">
          <img class="img logo-img" src="img/logo.png" alt="logo" />
        </div>
        <span class="name user-name"
          ><i class="fa-solid fa-user fa-lg"></i
          ><span class="top">Subham Narayan Deb</span></span
        >
        <span class="name location"
          ><i class="fa-solid fa-location-dot fa-lg"></i
          ><span class="top">Jamshedpur, Jharkhend</span></span
        >
        <span class="name mail"
          ><i class="fa-solid fa-envelope fa-lg"></i
          ><span class="top">sdeb5003@gmail.com</span></span
        >
        <span class="name number"
          ><i class="fa-solid fa-phone fa-lg"></i
          ><span class="top">+911234567890</span></span
        >
        <span class="name service"
          ><i class="fa-solid fa-gear fa-lg"></i
          ><span class="top"
            >Full Stack Web-Development, UI & UX Designer & Photos and
            Videos Editing, Logo Designer</span
          ></span
        >
        <span class="comment text">
          <a href="https://github.com/dashboard" class="github"
             ><i class="fa-brands fa-github fa-2xl" style="color: #32025c"></i
          ></a>
          <a href="https://www.linkedin.com/feed/" class="linkedin"
            ><i class="fa-brands fa-linkedin fa-2xl" style="color: #32025c"></i
          ></a>
          <a href="https://twitter.com/home" class="twitter"
            ><i class="fa-brands fa-twitter fa-2xl" style="color: #32025c"></i
          ></a>
          <a href="https://discord.com/channels/@me" class="discord"
            ><i class="fa-brands fa-discord fa-2xl" style="color: #32025c"></i>
          </a>
        </span>
      </div>
    </div>
  </div>
`

  showButton.addEventListener("mouseenter", () => {
    if (!isContentVisible) {
      contentme.innerHTML = text;
      isContentVisible = true;
      contentme.style.animation = "slideIn 0.5s ease-in-out forwards";
    }
  });

  hideButton[0].addEventListener("mouseleave", () => {
    if (isContentVisible) {
      contentme.style.animation = "slideOut 0.5s ease-in-out forwards";
      setTimeout(() => {
        contentme.innerHTML = "";
        isContentVisible = false;
      }, 900);
    }
  });
}

window.onload = show;



/****************************************/
/******** Photos Instagram Link *********/
/***************************************/

document.addEventListener("DOMContentLoaded", () => {
  const photosLinks = document.querySelectorAll(".visit-button");

  photosLinks.forEach(link => {
    link.addEventListener("click", () => {
      const url = link.getAttribute("data-instagram-link");
      window.open(url, "_blank");
    });

    link.setAttribute("target", "_blank");
  });
});


/*\\\\\\\ *********** ///////*/
/*\\\\\\\ Disable key ///////*/
/*\\\\\\\ *********** ///////*/

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  showMessage("Warning: Unauthorized access is not allowed!");
});

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
    e.preventDefault();
    showMessage("Warning: Unauthorized access is not allowed!");
    return false;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12") {
    e.preventDefault();
    showMessage("Warning: Unauthorized access is not allowed!");
    return false;
  }
});

function showMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message";
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
  document.querySelector(".card-blur").classList.add("blur");
  setTimeout(function () {
    document.body.removeChild(messageDiv);
    document.querySelector(".card-blur").classList.remove("blur");
  }, 2000);
}



/* =========================== */
/* ===== Download Resume ===== */
/* =========================== */


// document.addEventListener("DOMContentLoaded", function () {
//   const downloadBtn = document.getElementById("downloadBtn");

//   // URL of the file you want to download
//   const fileUrl = "CV.pdf";

//   downloadBtn.addEventListener("click", function () {
//     downloadFile(fileUrl);

//     // Add the animation class to the download button
//     downloadBtn.classList.add("rotate3d-animation");

//     // Remove the animation class after the animation completes
//     setTimeout(() => {
//       downloadBtn.classList.remove("rotate3d-animation");
//     }, 2000);
//   });
// });

// function downloadFile(url) {
//   fetch(url, {
//     method: "HEAD"
//   })
//     .then(response => {
//       const contentLength = response.headers.get("Content-Length");
//       const contentRange = `bytes=0-${contentLength}`;

//       return fetch(url, {
//         method: "GET",
//         headers: {
//           "Range": contentRange
//         }
//       });
//     })
//     .then(response => response.blob())
//     .then(blob => {
//       const objectURL = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = objectURL;
//       link.download = "Subham_Resume.pdf"; // Set the desired file name
//       link.click();
//       URL.revokeObjectURL(objectURL);
//     })
//     .catch(error => {
//       console.error("Error downloading the file:", error);
//     });
// }

document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadBtn");
  const message = document.getElementById("message");

  // URL of the file you want to download
  const fileUrl = "CV.pdf";

  downloadBtn.addEventListener("click", function () {

    const isUpToDate = false;

    if (!isUpToDate) {
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
      return;
    }

    downloadFile(fileUrl);

    // Add the animation class to the download button
    downloadBtn.classList.add("rotate3d-animation");

    // Remove the animation class after the animation completes
    setTimeout(() => {
      downloadBtn.classList.remove("rotate3d-animation");
    }, 2000);
  });
});

function downloadFile(url) {
  fetch(url, {
    method: "HEAD"
  })
    .then(response => {
      const contentLength = response.headers.get("Content-Length");
      const contentRange = `bytes=0-${contentLength}`;

      return fetch(url, {
        method: "GET",
        headers: {
          "Range": contentRange
        }
      });
    })
    .then(response => response.blob())
    .then(blob => {
      const objectURL = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectURL;
      link.download = "Subham_Resume.pdf"; // Set the desired file name
      link.click();
      URL.revokeObjectURL(objectURL);
    })
    .catch(error => {
      console.error("Error downloading the file:", error);
    });
}



/* ====== My Project [Section's] ===== */


// 1st Method 
// document.addEventListener("DOMContentLoaded", async function () {
//   const projectsContainer = document.getElementById("projects-container");
//   const username = "s-pro-dev";
//   const apiUrl = `https://api.github.com/users/${username}/repos`;

//   async function fetchProjects() {
//     try {
//       const response = await fetch(apiUrl);
//       const projects = await response.json();

//       projects.forEach((project) => {
//         const card = document.createElement("div");
//         card.classList.add("project-card");

//         card.innerHTML = `
//           <p>${project.description}</p>
//           <img src="${project.image_url}" alt="Project Screenshot">
//           <span class="project-language">${project.language}</span>
//           <a class="project-button" href="${project.homepage}" target="_blank">Go Live</a>
//         `;

//         projectsContainer.appendChild(card);
//       });
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//     }
//   }

//   fetchProjects();
// });

//2nd Method

document.addEventListener("DOMContentLoaded", async function () {
  const projectsContainer = document.getElementById("projects-container");
  const username = "s-pro-dev";
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  // Define a mapping of GitHub language colors
  const languageColors = {
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#1f62dee3',
    // Add more languages and their colors as needed
  };

  async function fetchProjects() {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch projects. Status: ${response.status}`);
      }

      const repositories = await response.json();

      for (const repository of repositories) {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
        <img src="${repository.img}" alt="Project Screenshot">
        <div class="project-details">
        <p>${repository.description || "No description available"}</p>
        <span class="code-usage"></span>
        <a class="project-button" href="${repository.homepage || repository.html_url}" target="_blank">
        <i class="fa-solid fa-eye"></i>
        </a>
        </div>
        `;
        // console.log(card.innerHTML)

        projectsContainer.appendChild(card);

        // Fetch the languages used in the repository
        const languagesUrl = `https://api.github.com/repos/${username}/${repository.name}/languages`;
        const languagesResponse = await fetch(languagesUrl);

        if (!languagesResponse.ok) {
          console.error(`Failed to fetch languages for ${repository.name}. Status: ${languagesResponse.status}`);
          continue;
        }

        const languagesData = await languagesResponse.json();

        // Calculate and display the percentages of code usage for each language
        const totalSize = Object.values(languagesData).reduce((total, size) => total + size, 0);
        const codeUsageElement = card.querySelector(".code-usage"); // Select the .code-usage element within this card

        Object.entries(languagesData).forEach(([language, size]) => {
          const percentage = ((size / totalSize) * 100).toFixed(2);

          // Get the Font Awesome icon class for programming languages
          let iconClass = "";
          switch (language.toLowerCase()) {
            case "html":
              iconClass = "fab fa-html5";
              break;
            case "css":
              iconClass = "fab fa-css3";
              break;
            case "javascript":
              iconClass = "fab fa-js";
              break;
            default:
              iconClass = "fas fa-code";
          }

          // Get the color for the language from the mapping
          const languageColor = languageColors[language] || "#333";

          // Display language icon and percentage with the correct color
          codeUsageElement.innerHTML += `
                      <i class="${iconClass} language-icon" style="color: ${languageColor}"></i>
                      <span>${percentage}%</span><br>
                  `;
        });
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  fetchProjects();
});


/* ====== My Project [HIDE AND UN-HIDE] ===== */
document.addEventListener("DOMContentLoaded", function () {
  const projectLink = document.getElementById("project");
  const navBar = document.getElementById("nav");
  const firstPage = document.getElementById("firstPage");
  const myProjects = document.getElementById("myprojects");
  const backButton = document.querySelector(".back-button");

  projectLink.addEventListener("click", function () {
    navBar.style.animation = "slideUp 0.5s forwards";
    firstPage.style.animation = "slideUp 0.5s forwards";

    myProjects.style.animation = "slideIn 0.5s forwards";

    setTimeout(function () {
      navBar.style.display = "none";
      firstPage.style.display = "none";
      myProjects.style.display = "block";
    }, 500);
  });

  backButton.addEventListener("click", function () {
    myProjects.style.animation = "slideUp 0.5s forwards";

    navBar.style.animation = "slideDown 0.5s forwards";
    firstPage.style.animation = "slideDown 0.5s forwards";

    setTimeout(function () {
      navBar.style.display = "";
      firstPage.style.display = "block";
      myProjects.style.display = "none";
    }, 500);
  });
});
