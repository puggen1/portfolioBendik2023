let navButton = document.querySelector("#top label");
let sideNav = document.querySelector("#navigation");
navButton.addEventListener("click", (e)=>{
    sideNav.style.animation ="navIn 2s linear infinite";
    
})
console.log(navButton);