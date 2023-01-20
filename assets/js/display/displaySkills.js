function showFrontSkills(data) {
  let skillsHtml = "";
  for (let i = 0; i < 3; i++) {
    skillsHtml += `<div class="skills" >
            <img class="SkillImg" src="${data[i].image}">
            <h2>${data[i].name}</h2>
            <p> ${data[i].level}</p>
            </div>`;
  }
  return skillsHtml;
}

export { showFrontSkills };
