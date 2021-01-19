var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var formToggle = document.querySelector(".form__button");
var formInput = document.querySelectorAll(".field__input")

formToggle.addEventListener("click", function(Event) {
var error

  formInput.forEach(function(item, i, formInput)  {
    item.classList.remove("field__input--error");
    if (item.value == "") {
      item.classList.add("field__input--error");
      error = true;
    }
  })

  if (error == true) {
        Event.preventDefault(".form__button");
    }
 });
