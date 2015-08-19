setInputValidationStatus = function(el, valid) {
    if (valid) {
        $(el).parent().removeClass('has-error').addClass('has-success');
    } else {
        $(el).parent().removeClass('has-success').addClass('has-error');
    }
}


// .js-validate-str
$(document).on('keyup', '.js-validate-str', function(ev) {
    var val = ev.target.value;
    setInputValidationStatus(ev.target, !!val && val == val.replace(/[^\w\d]*/gi, ''));
});

// .js-validate-int
$(document).on('keyup', '.js-validate-int', function(ev) {
    var val = ev.target.value;
    setInputValidationStatus(ev.target, val == +val);
});

// .js-validate-int-array
$(document).on('keyup', '.js-validate-int-array, .js-validate-float-array', function(ev) {
    var val = ev.target.value;
    var parsed = undefined;
    try {
        parsed = JSON.parse(val);
    } catch (e) {
        setInputValidationStatus(ev.target, false);
        return;
    }
    setInputValidationStatus(ev.target, !!parsed && !!parsed.push);
});

// .js-validate-url
$(document).on('keyup', '.js-validate-url', function(ev) {
    var val = ev.target.value;
    setInputValidationStatus(ev.target,
                val.indexOf('http') == 0 ||
                val.indexOf('ftp') == 0);
});

$(document).on('change', '#metadata', function(ev) {
    var val = ev.target.value;
    var parsed = undefined;
    try {
        parsed = JSON.parse(val);
    } catch (e) {
        setInputValidationStatus(ev.target, false);
        return;
    }
    setInputValidationStatus(ev.target, true);
});


Template.ingest_form.events({
    'click #submit-ingest-request': function() {
        if ($('.has-error').length > 0) {
            bootbox.alert("Invalid ingest request: Please check your form fields for errors. (Errors are marked with a red underline.)");
        } else {
            bootbox.alert("Submitted successfully!");
            // lol jk
        }
    }
})
