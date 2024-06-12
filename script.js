$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });

  document
    .querySelector(".open-modal-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(".modal").style.display = "block";
      document.querySelector(".modal-overlay").style.display = "block";
    });

  document
    .querySelector(".close-modal-btn")
    .addEventListener("click", function () {
      document.querySelector(".modal").style.display = "none";
      document.querySelector(".modal-overlay").style.display = "none";
    });

  document
    .querySelector(".modal-overlay")
    .addEventListener("click", function () {
      document.querySelector(".modal").style.display = "none";
      document.querySelector(".modal-overlay").style.display = "none";
    });
});
