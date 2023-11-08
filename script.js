document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    // Fonction pour gérer le clic sur le bouton de menu
    menuButton.addEventListener("click", function () {
      if (menu.classList.contains("d-none")) {
        menu.classList.remove("d-none");
      } else {
        menu.classList.add("d-none");
      }
    });
  });