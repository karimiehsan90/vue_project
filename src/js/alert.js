alertify.set('notifier','position', 'top-right');
// alertify.set('notifier','delay', 10000);
// alertify.error("sssssssssssssssssss");
function show_alert(text, is_error) {
    var element;
    if (is_error) {
        // element = $(".alert-danger");
        alertify.error(text);
    }
    else {
        alertify.success(text);
    }
}

function alert_notify(text) {
    alertify.notify(text, 'custom', 2, function(){console.log('dismissed');});
}
