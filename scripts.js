// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("mouseover", function () {
      const text = this.getAttribute("data-text");
      const textElement = document.createElement("div");
      textElement.className = "hover-text";
      textElement.innerText = text;
      this.appendChild(textElement);
    });

    item.addEventListener("mouseout", function () {
      const textElement = this.querySelector(".hover-text");
      if (textElement) {
        this.removeChild(textElement);
      }
    });
  });
});
