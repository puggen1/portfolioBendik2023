/**
 * @description creates html code for project section on front page
 * @param {Array} data the array that holds all the projects
 * @returns {String} html code for the front page project section
 */
function showFrontProjects(data) {
  let projectHtml = ``;
  for (let project in data) {
    //only shows 2 projects on front page
    if (project > 1) {
      break;
    }
    let logo = `<img class="projectLogo" src="${data[project].logo}" alt="${data[project].title}'s logo">`;
    if (!data[project].logo) {
      logo = `<div class="altLogo"><p> ${data[project].title}</p></div>`;
    }
    projectHtml += `<a class="projectFront" href="./singleProjectDisplay.html?title=${data[project].title}">
    <div class="imageBackground">
       ${logo}
    </div>
        <h3 class="centerHeader">${data[project].title}</h3>
        <p class="centerHeader"> ${data[project].ingress}</p>
        </a>`;
  }
  return projectHtml;
}
function showAllProjects(data) {
  let html = "";
  for (let project of data) {
    let logo = `<img class="projectLogo" src="${project.logo}" alt="${project.title}'s logo">`;
    if (!project.logo) {
      logo = `<div class="altLogo"><p> ${project.title}</p></div>`;
    }
    html += `
        <a href="./singleProjectDisplay.html?title=${project.title}">
        <div class="imageBackground">
        ${logo}
        </div>
        <section class="text">
        <h2>${project.title}</h2>
        <p>${project.ingress}</p>
        </section>
        </a>
        `;
  }
  return html;
}
function showSingleProject(data) {
  //
}

export { showFrontProjects, showAllProjects, showSingleProject };
