var $ = jQuery;

jQuery(document).ready(function ($) {

  $(".custom-input__input").change(function () {
    if ($(this).is(":checked")) {
      $('#btn').removeClass("disabled");
    }
  })

});

// JSCCommon.LazyFunction();
/***/