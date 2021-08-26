const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 100}ms">${letter}</span>`
    )
    .join("");
});

function getdetails() {
  var a = document.forms["details"]["Name"].value;
  var b = document.forms["details"]["email"].value;

  alert("Your name is " + a + " . Your e-mail is " + b);
}
