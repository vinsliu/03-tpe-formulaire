document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputs = form.querySelectorAll("input");
    let tooltips = form.querySelectorAll(".tooltip");
    tooltips.forEach((tooltop) => (tooltips.textCont = ""));
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

    if (isValid) {
      form.submit();
    }
  });
});
