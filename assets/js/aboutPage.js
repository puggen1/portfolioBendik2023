import getContent from "./fetch/fetchContent.js";
import { showAbout } from "./display/displayAbout.js";
//fetching json content
let aboutContent = await getContent("aboutMe");
//selecting html elements
let basic = document.querySelector("#basic");
let frontEnd = document.querySelector("#frontEnd");
let hobby = document.querySelector("#hobby");
//creates html
let htmlArr = showAbout(aboutContent);
//displays html
basic.innerHTML = htmlArr[0];
frontEnd.innerHTML = htmlArr[1];
hobby.innerHTML = htmlArr[2];
