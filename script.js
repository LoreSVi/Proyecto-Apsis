
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#navbar2 ul li a");
  const underline = document.getElementById("underline");

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      const rect = link.getBoundingClientRect();
      underline.style.width = rect.width + "px";
      underline.style.transform = `translateX(${rect.left}px)`;
    });

    link.addEventListener("mouseleave", function () {
      const activeLink = document.querySelector("#navbar2 ul li a.active");
      if (activeLink) {
        const rect = activeLink.getBoundingClientRect();
        underline.style.width = rect.width + "px";
        underline.style.transform = `translateX(${rect.left}px)`;
      } else {
        underline.style.width = "0";
        underline.style.transform = "translateX(0)";
      }
    });

    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");
    });
  });
});


