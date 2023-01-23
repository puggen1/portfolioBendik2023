function showFrontSkills(data) {
  let skillsHtml = "";
  for (let i = 0; i < 3; i++) {
    skillsHtml += `<div class="skills" >
            <img class="SkillImg" src="${data[i].image}" alt="${data[i].name}'s logo">
            <h3 class="centerHeader">${data[i].name}</h3>
            <p class="centerHeader"> ${data[i].level}</p>
            </div>`;
  }
  return skillsHtml;
}
function showAllSkills(data) {
  let knownSkills = ``;
  let wantedSkills = ``;
  for (let known of data.knownSkills) {
    knownSkills += `
    <article class="skills" >
            <img class="SkillImg" src="${known.image}" alt="${known.name}'s logo">
            <h3 class="centerHeader">${known.name}</h3>
            <p class="centerHeader"> ${known.level}</p>
            </article>`;
  }
  for (let wanted of data.wantedSkills) {
    wantedSkills += `
    <div class="skills" >
    <img class="SkillImg" src="${wanted.image}" alt="${wanted.name}'s logo">
    <h3 class="centerHeader">${wanted.name}</h3>
    </div>`;
  }
  return [knownSkills, wantedSkills];
}

export { showFrontSkills, showAllSkills };
