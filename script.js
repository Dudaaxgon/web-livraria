function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Caixinhas da section categorias
const caixinhas = document.querySelectorAll(".caixinha");

caixinhas.forEach(function(caixinha) {
  caixinha.addEventListener("mouseenter", function() {
    caixinha.style.background = "#55130b";
  });

  caixinha.addEventListener("mouseout", function() {
    caixinha.style.background = "#7e6d5f";
  });
});
