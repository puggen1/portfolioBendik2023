//targeting all the needed content and buttons
let navButton = document.querySelector("#top label");
let sideNav = document.querySelector("#navigation");
let navContent = document.querySelector("#navContent");
let back = document.querySelector("#backNav");
let allHidden = document.querySelectorAll(".hidden");

//when navbutton is clicked the menu will show
navButton.addEventListener("click", (e) => {
  sideNav.classList.toggle("showNavParent");
  navContent.classList.toggle("showNav");
  //a simple working delay for the content inside the nav, so it wont show before the transistion is done (did this instead of alot of animation)
  setTimeout(() => {
    allHidden.forEach((ele) => {
      ele.classList.remove("hidden");
    });
  }, 300);
});

//both of these eventlisters closes the nav menu, either if you click the button, or outside the nav on bigger screens
back.addEventListener("click", (e) => {
  closeNavigation("back");
});
sideNav.addEventListener("click", (e) => {
  closeNavigation(e);
});

function closeNavigation(e) {
  //since the back button have content inside, i had to send a string trough so it does not take icon's atributes and dont run
  if (e === "back" || !(e.target.id !== "navigation")) {
    sideNav.classList.toggle("showNavParent");
    navContent.classList.toggle("showNav");
    allHidden.forEach((ele) => {
      ele.classList.add("hidden");
    });
  } else {
    return;
  }
}
