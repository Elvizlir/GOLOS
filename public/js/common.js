var $ = jQuery;

jQuery(document).ready(function ($) {

  $(".custom-input__input").change(function () {
    if ($(this).is(":checked")) {
      $('#btn').removeClass("disabled");
    }
  })

  $(document).on('change input cut copy paste', '.input-text--js', function () {

		if ($(this).val() !== '') {
			$('#btn').removeClass('disabled');
		} else {
			$('#btn').addClass('disabled');
		}
	})

});

// JSCCommon.LazyFunction();
/***/