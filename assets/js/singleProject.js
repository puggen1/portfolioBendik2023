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
let githubImg = document.querySelector("#gh img");
let learnedDiv = document.querySelector("#learned");
// criterias and learned had to be specific, i dont know why yet
let {
  logo,
  image,
  projectTitle = title,
  projectCriterias = filteredProjects[0].criterias,
  paragraphs,
  links,
  ingress,
  projectLearned = filteredProjects[0].learned,
} = filteredProjects[0];
document
  .querySelector('meta[name="description"]')
  .setAttribute("content", ingress);
background.style.backgroundImage = `url(${image})`;
screenshot.src = image;
screenshot.alt = projectTitle + "'s logo";
header.innerText = projectTitle;
let para = "";
for (let p of paragraphs) {
  para += `<p> ${p}</p>`;
}
allText.innerHTML += para;
let allCriterias = "";
for (let criteria of projectCriterias) {
  allCriterias += `<li> ${criteria}</li>`;
}
crit.innerHTML += allCriterias;

github.href = links[0].link;
githubImg.alt = "GitHubs Logo";
website.href = links[1].link;
websiteImg.src = logo;
websiteImg.alt = "the websites logo Logo";
websiteImg.style.backgroundColor = "white";
let learnedItems = "";
for (let learned of projectLearned) {
  learnedItems += `
    <li>${learned}</li>
    `;
}
learnedDiv.innerHTML += learnedItems;
