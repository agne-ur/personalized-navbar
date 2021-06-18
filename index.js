const nameInput = document.querySelector(".name-input");
const linkName = document.querySelector(".link-name");

function setName(name) {
  linkName.innerHTML = "Welcome, ";
  let spanName = document.createElement("span");
  spanName.innerHTML = name;
  spanName.setAttribute("class", "name");
  linkName.appendChild(spanName);
}

nameInput.addEventListener("change", () => {
  setName(nameInput.value);
});
