document.getElementById("form").addEventListener("submit", function (e) {
  let nameInput = document.getElementById("name");
  if (nameInput.value === "") {
    e.preventDefault();
    alert('Le champs "Nom" ne peut pas être vide.');
  }
});
