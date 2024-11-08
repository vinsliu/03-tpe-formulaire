document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputs = form.querySelectorAll("input");
    let tooltips = form.querySelectorAll(".tooltip");
    tooltips.forEach((tooltip) => (tooltips.textCont = ""));
    let isValid = true;
    inputs.forEach((input) => {
      let tooltip = input.parentElement.querySelector(".tooltip");
      if (input.value.trim() === "") {
        isValid = false;
        tooltip.style.display = "block";
        tooltip.style.visibility = "visible";
        tooltip.textContent = "Ce champ ne peut pas être vide !";
        tooltip.style.color = "red";
        tooltip.style.border = "1px solid red";
      }
    });

    let pseudo = document.getElementById("pseudo").value;
    let pseudoTooltip = document
      .getElementById("pseudo")
      .parentElement.querySelector(".tooltip");
    if (pseudo.length < 4 || pseudo.length > 14) {
      isValid = false;
      pseudoTooltip.style.display = "block";
      pseudoTooltip.style.display = "block";
      pseudoTooltip.style.visibility = "visible";
      pseudoTooltip.textContent =
        "Le pseudo doit contenir entre 4 à 14 caractères !";
      pseudoTooltip.style.color = "red";
      pseudoTooltip.style.border = "1px solid red";
    }

    let phone = document.getElementById("phone");
    let phoneTooltip = document
      .getElementById("phone")
      .parentElement.querySelector(".tooltip");

    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("passwordConfirm").value;
    let passwordTooltip = document
      .getElementById("password")
      .parentElement.querySelector(".tooltip");
    let passwordCTooltip = document
      .getElementById("passwordConfirm")
      .parentElement.querySelector(".tooltip");
    if (password !== passwordConfirm) {
      isValid = false;
      passwordTooltip.style.display = "block";
      passwordTooltip.style.visibility = "visible";
      passwordTooltip.textContent = "Les mots de passe ne correspondent pas";
      passwordTooltip.style.color = "red";
      passwordTooltip.style.border = "1px solid red";
      passwordCTooltip.style.display = "block";
      passwordCTooltip.style.visibility = "visible";
      passwordCTooltip.textContent = "Les mots de passe ne correspondent pas";
      passwordCTooltip.style.color = "red";
      passwordCTooltip.style.border = "1px solid red";
    }

    if (isValid) {
      form.submit();
    }
  });
});
