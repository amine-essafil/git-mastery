// git-mastery practice project
// This file evolves as I learn and practice Git concepts

const project = {
  name: "git-mastery",
  author: "Amine Essafil",
  goal: "Master Git version control through hands-on practice",
  currentModule: "M03 - Remotes",
  status: "in progress"
};
 
function startProject(project) {
  console.log(`Starting project: ${project.name}`);
  console.log(`Author: ${project.author}`);
  console.log(`Current module: ${project.currentModule}`);
  console.log(`Status: ${project.status}`);
  console.log(`Goal: ${project.goal}`);
}
console.log("Module: M02 - Branching");
console.log("Status: In progress");

startProject(project);

console.log("testing fetch");