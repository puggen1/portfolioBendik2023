import getContent from "./fetch/fetchContent.js";

let test = window.location.search;

let searchParam = new URLSearchParams(test);

let title = searchParam.get("title");
let projects = await getContent("projects");

let filteredProjects = await projects.projects.filter((project) => {
  if (project.title === title) return true;
});

let background = document.querySelector("#bgImage");
let screenshot = document.querySelector(".screenshot");
let header = document.querySelector("h1");
let allText = document.querySelector("#text");
let crit = document.querySelector(".criterias");
let github = document.querySelector("#gh");
let website = document.querySelector("#website");
let websiteImg = document.querySelector("#website img");
let learned = document.querySelector("#learned");
document
  .querySelector('meta[name="description"]')
  .setAttribute("content", filteredProjects[0].ingress);
background.style.backgroundImage = `url(${filteredProjects[0].image})`;
screenshot.src = filteredProjects[0].image;
header.innerText = filteredProjects[0].title;
let para = "";
for (let p of filteredProjects[0].paragraphs) {
  para += `<p> ${p}</p>`;
}
allText.innerHTML += para;
let criterias = "";
for (let criteria of filteredProjects[0].criterias) {
  criterias += `<li> ${criteria}</li>`;
}
crit.innerHTML += criterias;

github.href = filteredProjects[0].links[0].link;
website.href = filteredProjects[0].links[1].link;
websiteImg.src = filteredProjects[0].logo;
websiteImg.style.backgroundColor = "white";
let learnedItems = "";
for (let learned of filteredProjects[0].learned) {
  learnedItems += `
    <li>${learned}</li>
    `;
}
learned.innerHTML += learnedItems;
