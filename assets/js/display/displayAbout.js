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

function createAbout(topic) {
  let p = "";
  for (let para of topic.paragraphs) {
    p += `<p>${para}</p>`;
  }
  console.log(p);
  return `
  <img class="aboutImg" src="${topic.image}">
  <h2>${topic.title}</h2>
  <div class="aboutContent">
  ${p}
  </div>`;
}
function showAbout(data) {
  let basic = createAbout(data.about[0]);
  let front = createAbout(data.about[1]);
  let hobby = createAbout(data.about[2]);
  return [basic, front, hobby];
}
export { showFrontAbout, showAbout };
