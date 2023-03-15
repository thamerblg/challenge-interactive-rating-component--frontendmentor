$(document).ready(function () {
  Array.from($(".card form input")).forEach(function (inpt) {
    $(inpt).on("click", (el) => {
      $(".option").removeClass("clicked");
      $("label[for='" + inpt.id + "']").toggleClass("clicked");
    });
  });
  $(".card form").on("submit", (e) => {
    e.preventDefault();
    $(".card.rating").css("display", "none");
    $(".card.thank_you").css("display", "block");

    Array.from($("input")).forEach(function (inp) {
      if (inp.checked === true) {
        $(".result span").text(inp.value);
      }
    });
  });
});
