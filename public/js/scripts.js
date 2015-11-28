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
                console.log(msg)
                $("#username").val("")
                $("#email").val("")
                $("#pass").val("")
                $("#pass2").val("")
                $("#signup-modal").closeModal()
            },
            error: function() {
                alert("Error de conexión.")
            }
        })
    })
    
    $("#login-submit").on("click", function() {
        $.ajax({
            type: "POST",
            url: "/login",
            data: $("#login-form").serialize(),
            success: function(msg) {
                alert(msg)
                $("#loginName").val("")
                $("#loginPass").val("")
                $("#login-modal").closeModal()
            },
            error: function() {
                alert("Error...")
            }
        })
    })
    
});