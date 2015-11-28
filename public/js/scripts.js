$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.slider').slider({full_width: true});
    $('.modal-trigger').leanModal();
    
    $("#signup-submit").on("click", function() {
        $.ajax({
            type: "POST",
            url: "/signup",
            data: $("#signup-form").serialize(),
            success: function(msg) {
                alert(msg)
            },
            error: function() {
                alert("Error de conexión.")
            }
        })
    })
});