function showFrontProjects(data) {
  let projectHtml = ``;
  for (let project of data) {
    projectHtml += `<a class="projectFront" href="./singleProjectDisplay.html?title=${data.title}">
        <img class="projectLogo" src="${project.logo}">
        <h2>${project.title}</h2>
        <p> ${project.ingress}</p>
        </a>`;
  }
  return projectHtml;
}
function showAllProjects(data) {
  //
}
function showSingleProject(data) {
  //
}

export { showFrontProjects, showAllProjects, showSingleProject };
