import getContent from "./fetch/fetchContent.js";
// setting the url to a variable
let searchField = window.location.search;
// creating a new urlSearchParams object
let searchParam = new URLSearchParams(searchField);
// getting the title from the url
let title = searchParam.get("title");
// fetching the projects
let projects = await getContent("projects");
// filtering the projects to find the one with the same title as the one in the url
let filteredProjects = await projects.projects.filter((project) => {
  if (project.title === title) return true;
});
//declaring all the places the content will be displayed
let background = document.querySelector("#bgImage");
let screenshot = document.querySelector(".screenshot");
let header = document.querySelector("h1");
let allText = document.querySelector("#text");
let criteriasUl = document.querySelector(".criterias ul");
let github = document.querySelector("#gh");
let website = document.querySelector("#website");
let websiteImg = document.querySelector("#website img");
let githubImg = document.querySelector("#gh img");
let learnedUl = document.querySelector("#learned ul");
// if the project is not found, redirect to the projects page
if (filteredProjects.length === 0) document.location.href = "./projects.html";
// destructuring the object
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
// setting the meta description to the ingress
document
  .querySelector('meta[name="description"]')
  .setAttribute("content", ingress);
background.style.backgroundImage = `url(${image})`;
screenshot.src = image;
screenshot.alt = projectTitle + "'s logo";
header.innerText = projectTitle;
// creating the paragraphs holder
let para = "";
// looping through the paragraphs and adding them to the holder
for (let p of paragraphs) {
  para += `<p> ${p}</p>`;
}
// adding the paragraphs holder to the html
allText.innerHTML += para;
// the same as above but for the criterias
let allCriterias = "";
for (let criteria of projectCriterias) {
  allCriterias += `<li> ${criteria}</li>`;
}
criteriasUl.innerHTML += allCriterias;
// adding the links to the html
github.href = links[0].link;
githubImg.alt = "GitHubs Logo";
website.href = links[1].link;
websiteImg.src = logo
  ? logo
  : "./assets/img/michael-baccin-XopauR-Nagk-unsplash.jpg";
websiteImg.alt = "the websites logo Logo";
websiteImg.style.backgroundColor = "white";
let learnedItems = "";
// adding the learned items to the html
for (let learned of projectLearned) {
  learnedItems += `
    <li>${learned}</li>
    `;
}
learnedUl.innerHTML += learnedItems;
