import getContent from "./fetch/fetchContent.js";
import { showAbout } from "./display/displayAbout.js";
let aboutContent = await getContent("aboutMe");

let basic = document.querySelector("#basic");
let frontEnd = document.querySelector("#frontEnd");
let hobby = document.querySelector("#hobby");

let htmlArr = showAbout(aboutContent);

basic.innerHTML = htmlArr[0];
frontEnd.innerHTML = htmlArr[1];
hobby.innerHTML = htmlArr[2];
