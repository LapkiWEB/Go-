$(document).ready(function () {
    $(".link-popup").magnificPopup();
    
    $(document).ready(function () {
        $("#form").submit(function () {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function () {
                $(this).find("input").val("");
                alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                $("#form").trigger("reset");
            });
            return false;
        });
    });


    $(document).ready(function () {
        $("#forms").submit(function () {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function () {
                $(this).find("input").val("");
                alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                $("#forms").trigger("reset");
            });
            return false;
        });
    });
});