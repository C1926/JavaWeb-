$(function () {
    $.get("userHeader.html",function (data) {
        $("#userheader").html(data);
    })
});