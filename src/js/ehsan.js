$(".fa-filter").on("click", function () {
    $(".spinner-border").removeClass("d-none");
    $.get("../api/admin-cases.json", function (data) {
        alert(data.data[0].title);
    });
    $(".spinner-border").addClass("d-none");
});