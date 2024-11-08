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

    let passwordInput = document.getElementById("password").value;
    let passwordConfirmInput = document.getElementById("passwordConfirm").value;
    let passwordTooltip = document
      .getElementById("passwordConfirm")
      .parentElement.querySelector(".tooltip");
    if (passwordInput !== passwordConfirmInput) {
      isValid = false;
      passwordTooltip.style.display = "block";
      passwordTooltip.style.visibility = "visible";
      passwordTooltip.textContent = "Les mots de passe ne correspondent pas";
      passwordTooltip.style.color = "red";
      passwordTooltip.style.border = "1px solid red";
    }

    if (isValid) {
      form.submit();
    }
  });
});
