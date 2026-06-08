(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      var target = event.target;
      if (target && target.tagName === "A" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var filterButtons = document.querySelectorAll(".filter-btn");
  var sessions = document.querySelectorAll(".session-card[data-type]");

  if (filterButtons.length && sessions.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");

        filterButtons.forEach(function (other) {
          other.classList.remove("is-active");
        });
        button.classList.add("is-active");

        sessions.forEach(function (card) {
          var type = card.getAttribute("data-type");
          card.hidden = !(filter === "all" || filter === type);
        });
      });
    });
  }
})();
