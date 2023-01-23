import getContent from "./fetch/fetchContent.js";
import { showAllSkills } from "./display/displaySkills.js";
//fetching json content
let data = await getContent("skills");
//creates html
let allContent = showAllSkills(data);
//selecting html elements
let know = document.querySelector("#know div");
let want = document.querySelector("#want div");
//displays html
know.innerHTML += allContent[0];
want.innerHTML += allContent[1];
