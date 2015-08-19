Template.download.rendered = function() {
    if (!!this.data.token) {
        $('#token').val(this.data.token);
    }
}

Template.download.events({
    'click #submit-download-request': function() {
        var token = $('#token').val(),
            resolution = parseInt($('#resolution').val()),
            x_start = parseInt($('#x_start').val()),
            x_stop = parseInt($('#x_stop').val()),
            y_start = parseInt($('#y_start').val()),
            y_stop = parseInt($('#y_stop').val()),
            z_start = parseInt($('#z_start').val()),
            z_stop = parseInt($('#z_stop').val());

        if (!!token && resolution >= 0 && x_start >= 0 && x_stop >= 0 && y_start >= 0 && y_stop >= 0 && z_start >= 0 && z_stop >= 0) {

            if ((x_stop - x_start) * (y_stop - y_start) * (z_stop - z_start) > 2e6) {
                bootbox.dialog({
                    title: "Data Request Error",
                    message: "Your requested dataset is too large to download with the web console. Please use CAJAL or OCPy instead.",
                    buttons: {
                        success: {
                            label: "OK",
                            className: "btn-default"
                        }
                    }
                });
                return false;
            }

            window.open("http://openconnecto.me/ocp/ca/" +
                    [token,
                    'hdf5',
                    resolution,
                    x_start + "," + x_stop,
                    y_start + "," + y_stop,
                    z_start + "," + z_stop].join('/')
                + "/")
        } else {
            bootbox.alert("All fields are required. If you are unsure of what to use for each field, please reach out to us at contact@ocp.me.");
        }
    }
});
