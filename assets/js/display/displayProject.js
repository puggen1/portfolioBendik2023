function showFrontProjects(data) {
  let projectHtml = ``;
  for (let project of data) {
    projectHtml += `<a class="projectFront" href="./singleProjectDisplay.html?title=${project.title}">
        <img class="projectLogo" src="${project.logo}">
        <h2>${project.title}</h2>
        <p> ${project.ingress}</p>
        </a>`;
  }
  return projectHtml;
}
function showAllProjects(data) {
  let html = "";
  for (let project of data) {
    html += `
        <a href="./singleProjectDisplay.html?title=${project.title}">
        <img src="${project.logo}" alt="${project.title}'s logo">
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
