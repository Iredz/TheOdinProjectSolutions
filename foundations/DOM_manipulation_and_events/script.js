const container = document.querySelector("#container")
const p = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");


p.textContent ="Hey, I'm red!";
p.style["color"] = "red";

h3.textContent = "I'm a blue h3!";
h3.style["color"] = "blue";

div.style["border"] = "2px black solid"
div.style["backgroundColor"] = "pink";

const childDiv = document.createElement("div");
const childP = document.createElement("p");

childDiv.textContent = "I'm in a div";
childP.textContent = "ME TOO!";


div.appendChild(childDiv);
div.appendChild(childP);

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);






