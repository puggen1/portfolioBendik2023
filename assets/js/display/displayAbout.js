/**
 * @description creates html code for about section on front page
 * @param {Array} data an array of objects
 * @returns {String} html code with about information for front page
 */
function showFrontAbout(data) {
  let aboutHtml = "";
  for (let about of data) {
    aboutHtml += `<div class="aboutFront" >
              <img class="aboutImg" src="${about.image}" alt="${about.alt}">
              <h3 class="centerHeader">${about.title}</h3>
              <p> ${about.paragraphs[0]}</p>
              </div>`;
  }
  return aboutHtml;
}
/**
 * @description creates html code for about section on about page
 * @param {Obejct} topic  an object with information that needs to be displayed
 * @returns {String} html code with about information for about page
 */
function createAbout(topic) {
  let p = "";
  for (let para of topic.paragraphs) {
    p += `<p>${para}</p>`;
  }
  return `
  <img class="aboutImg" src="${topic.image}" alt="${topic.alt}">
  <h2 class="centerHeader">${topic.title}</h2>
  <div class="aboutContent">
  ${p}
  </div>`;
}
/**
 *  @description creates all 3 section of about page and returns them in an array
 * @param {Array} data an array of objects
 * @returns {Array} an array of html code
 */
function showAbout(data) {
  let basic = createAbout(data.about[0]);
  let front = createAbout(data.about[1]);
  let hobby = createAbout(data.about[2]);
  return [basic, front, hobby];
}
export { showFrontAbout, showAbout };
