function showFrontProjects(data) {
  let projectHtml = ``;
  for (let project of data) {
    projectHtml += `<a class="projectFront" href="./singleProjectDisplay.html?title=${project.title}">
    <div class="imageBackground">
        <img class="projectLogo" src="${project.logo}" alt="${project.title}'s logo">
    </div>
        <h3 class="centerHeader">${project.title}</h3>
        <p class="centerHeader"> ${project.ingress}</p>
        </a>`;
  }
  return projectHtml;
}
function showAllProjects(data) {
  let html = "";
  for (let project of data) {
    html += `
        <a href="./singleProjectDisplay.html?title=${project.title}">
        <div class="imageBackground">
        <img src="${project.logo}" alt="${project.title}'s logo">
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
