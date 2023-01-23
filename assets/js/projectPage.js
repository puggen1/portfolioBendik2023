import getContent from "./fetch/fetchContent.js";
import { showAllProjects } from "./display/displayProject.js";
let allProjectPlacement = document.querySelector("#allProject");
//fetching json content
let content = await getContent("projects");
//creates html and displays it
allProjectPlacement.innerHTML = showAllProjects(content.projects);
