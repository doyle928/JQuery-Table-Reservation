$("#resForm").hide();
$(document).ready(function () {
    var test = 0;
    $('.available').click(function (event) {
        test = $(event.target);
        if ($(this).hasClass("available")) {
            $(test).removeClass("available").addClass("reserved");
            $("#resForm").fadeIn(300);
            $("form > p").html("Table Number: " + $(test).attr('id').replace(/table/, ""));
        }
        return false;
    }).children().click(function(e) {
        test = $(this).parent();
        if ($(test).hasClass("available")) {
            $(test).removeClass("available").addClass("reserved");
            $("#resForm").fadeIn(300);
            $("form > p").html("Table Number: " + $(test).attr('id').replace(/table/, ""));
        }
        return false;
    });
    $(".reserved").click(function () {
        alert("");
    });
    $("#reserve").click(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var party = $("#resSize").val();
        var phone = $("#phone").val();
        if ((name == null || name == "") || (party == null || party == "") || (phone == null || phone == "")) {
            $("#name").val("");
            $("#resSize").val("");
            $("#phone").val("");
            return false;
        } else {
            $("#resForm").fadeOut(400);
            var span = $("<span></span>").attr("class", "tableHover");
            var paraName = $("<p></p>").text("Name: " + name);
            var paraSize = $("<p></p>").text("Size of Party: " + party);
            span.append(paraName);
            span.append(paraSize);
            $(test).append(span);
        }
        $("#name").val("");
        $("#resSize").val("");
        $("#phone").val("");
    });
    $("#exit").click(function () {
        $("#resForm").fadeOut(400);
        $("#name").val("");
        $("#resSize").val("");
        $("#phone").val("");
        $(test).removeClass("reserved").addClass("available");
    });
});
$(document).on("mouseenter", ".reserved", function () {
    //var spanTest = $("span");
    $(this).children("span").slideToggle(200);
});

$(document).on("mouseleave", ".reserved", function () {
    //var spanTest = $("span");
    $(this).children("span").slideToggle(200);
});
$(document).on("mouseenter", ".available", function () {
    $(this).css({
        "box-shadow": "2px 2px 5px 0px #ADAAAA"
    });
});

$(document).on("mouseleave", ".available", function () {
    $(this).css({
        "box-shadow": "0 0 0 0 white"
    });
});