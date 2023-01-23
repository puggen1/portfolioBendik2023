import getContent from "./fetch/fetchContent.js";
import { showFrontSkills } from "./display/displaySkills.js";
import { showFrontProjects } from "./display/displayProject.js";
import { showFrontAbout } from "./display/displayAbout.js";
//selecting html elements
let projectDiv = document.getElementById("projects");
let aboutDiv = document.getElementById("aboutMe");
let skillsDiv = document.getElementById("skills");
//fetching json content and displaying it
(async () => {
  let about = await getContent("aboutMe");
  let projects = await getContent("projects");
  let skills = await getContent("skills");

  projectDiv.innerHTML = showFrontProjects(projects.projects);
  skillsDiv.innerHTML = showFrontSkills(skills.knownSkills);
  aboutDiv.innerHTML = showFrontAbout(about.about);
})();
