function showFrontAbout(data) {
  let aboutHtml = "";
  for (let about of data) {
    aboutHtml += `<div class="aboutFront" >
              <img class="aboutImg" src="${about.image}">
              <h2>${about.title}</h2>
              <p> ${about.paragraphs[0]}</p>
              </div>`;
  }
  return aboutHtml;
}
export { showFrontAbout };
