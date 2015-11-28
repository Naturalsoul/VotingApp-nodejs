$(document).ready(function() {
    $(".button-collapse").sideNav({closeOnClick: true});
    $('.slider').slider({full_width: true});
    $('.modal-trigger').leanModal();
    
    // button-collapse's modals doesn't work without this portion of code -----
    
    $("#login-mobile-modal").on("click", function() {
        $("#login-modal").openModal()
    })
    
    $("#signup-mobile-modal").on("click", function() {
        $("#signup-modal").openModal()
    })
    
    // ------------------------------------------------------------------------
    
    $("#signup-submit").on("click", function() {
        $.ajax({
            type: "POST",
            url: "/signup",
            data: $("#signup-form").serialize(),
            success: function(msg) {
                alert(msg)
                $("#username").val("")
                $("#email").val("")
                $("#pass").val("")
                $("#pass2").val("")
                $("#signup-modal").closeModal()
            },
            error: function() {
                alert("Error: 'Bad Connection'")
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
                alert("Error: 'Bad Connection'")
            }
        })
    })
    
});