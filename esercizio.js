const formArea = document.getElementById("formArea");
const saveButton = document.getElementsByClassName("btn")[0];
const loadButton = document.getElementsByClassName("btn")[2];
const resetButton = document.getElementsByClassName("btn")[1];

saveButton.addEventListener("click", function () {
  console.log("cliccato");
  const formAreaContent = formArea.value;

  sessionStorage.setItem("saved-content", formAreaContent);
});

loadButton.addEventListener("click", function () {
  const storageContent = sessionStorage.getItem("saved-content");
  formArea.value = storageContent;
});

resetButton.addEventListener("click", function () {
  formArea.value = "";
  sessionStorage.removeItem("saved-content");
});
