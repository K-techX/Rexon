$(document).ready(function() {
	$("#userForm").submit(function(e) {
		removeFeedback();
		var errors = validateForm();
		if (errors == "") {
			return true;
		} else {
			provideFeedback(errors);
			e.preventDefault();
			return false;
		}
	});
	function validateForm() {
		var errorFields = new Array();
				if ($('#email').val() == "") {
			errorFields.push('email');
		}
		if ($('#password').val() == "") {
			errorFields.push('password');
		}
				if (!($('#email').val().indexOf(".") > 2) && ($('#email').val().indexOf("@"))) {
			errorFields.push('email');
		}
		return errorFields;
	}
	function provideFeedback(incomingErrors) {
		for (var i = 0; i < incomingErrors.length; i++) {
		$("#" + incomingErrors[i]).addClass("errorClass");
		$("#" + incomingErrors[i] + "Error").removeClass("errorFeedback");
		}
		$("#errorDiv").html("Errors encountered");
	}
	function removeFeedback() {
		$("#errorDiv").html("");
		$('input').each(function() {
			$(this).removeClass("errorClass");
		});
		$('.errorSpan').each(function() {
			$(this).addClass("errorFeedback");
		});
	}
});
