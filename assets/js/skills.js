import getContent from "./fetch/fetchContent.js";
import { showAllSkills } from "./display/displaySkills.js";

let data = await getContent("skills");
let allContent = showAllSkills(data);

let know = document.querySelector("#know div");
let want = document.querySelector("#want div");

know.innerHTML += allContent[0];
want.innerHTML += allContent[1];
