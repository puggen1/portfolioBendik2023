let navButton = document.querySelector("#top label");
let sideNav = document.querySelector("#navigation");
let navContent = document.querySelector("#navContent");
let back = document.querySelector("#backNav");
let allHidden = document.querySelectorAll(".hidden");
navButton.addEventListener("click", (e) => {
  sideNav.style.width = "100%";
  navContent.style.width = "300px";
  allHidden.forEach((ele) => {
    ele.classList.remove("hidden");
  });
});
console.log(navButton);
back.addEventListener("click", (e) => {
  sideNav.style.width = "0px";
  navContent.style.width = "0px";
  allHidden.forEach((ele) => {
    ele.classList.add("hidden");
  });
});
sideNav.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.id !== "navigation") {
    return;
  }
  sideNav.style.width = "0px";
  navContent.style.width = "0px";
  allHidden.forEach((ele) => {
    ele.classList.add("hidden");
  });
});
