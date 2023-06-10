let lists = document.querySelectorAll(".side-nav li");
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".side-nav");
let main = document.querySelector(".main");

// siden nav
function activeLink() {
    lists.forEach((item) => {
      item.classList.remove("hovered");
    });
    this.classList.add("hovered");
  
  }
  lists.forEach((item) => item.addEventListener("mouseover", activeLink));
  
  toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };