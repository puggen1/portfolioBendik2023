import getContent from "./fetch/fetchContent.js";
import { showAllProjects } from "./display/displayProject.js";
let allProjectPlacement = document.querySelector("#allProject");

let content = await getContent("projects");

allProjectPlacement.innerHTML = showAllProjects(content.projects);
