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
        
        // Forms validations ------------------------------------------------------
    
            var signupInputs = [$("#username").val(), $("#email").val(), $("#pass").val(), $("#pass2").val()]
            var flag = true;
            
            for(var i = 0; i < signupInputs.length; i++){
                if(!signupInputs[i]) {
                    flag = false
                    alert("Complete all the fields.")
                    break
                }
            }
            
            if(flag) {
                if(signupInputs[2].trim() !== signupInputs[3].trim()) {
                    flag = false
                    alert("The passwords are not the same.")
                    alert(signupInputs[2] + " - " + signupInputs[3])
                }
            }
            
            if(flag) {
                var correctEmail = /(\w+)[@](\w+)[.](\w+)/g.test(signupInputs[1])
                if(!correctEmail) {
                    flag = false
                    alert("The email is invalid.")
                }
            }
        // ------------------------------------------------------------------------
        
        if(flag) {
            $.ajax({
                type: "POST",
                url: "/signup",
                data: $("#signup-form").serialize(),
                success: function(msg) {
                    Materialize.toast(msg.responseText, 3000)
                    
                    $("#username").val("")
                    $("#email").val("")
                    $("#pass").val("")
                    $("#pass2").val("")
                    $("#signup-modal").closeModal()
                },
                error: function(msg) {
                    Materialize.toast(msg.responseText, 3000)
                }
            })
        }
    })
    
    $("#login-submit").on("click", function() {
        
        // Form Validations ----------------------------------------------
        
        var loginInputs = [$("#loginName").val(), $("#loginPass").val()]
        var flag = true
        
        for(var i = 0; i < loginInputs.length; i++) {
            if(!loginInputs[i]) {
                flag = false
                alert("Complete all the fields.")
                break
            }
        }
        
        // ---------------------------------------------------------------
        
        if(flag) {
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
        }
    })
    
});