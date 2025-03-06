function showLogin() {
    document.getElementById("signup-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
}

function showSignup() {
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("signup-page").classList.remove("hidden");
}

function recaptchaCallback() {
    document.getElementById("signup-btn").disabled = false; 
}


document.getElementById("signup-btn").disabled = true;

function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => 
        { const token = await grecaptcha.enterprise.execute('6LceZ-sqAAAAALrkBN5bUH4VjxikEGUHRiLnyY_b', {action: 'LOGIN'}) })
}

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("signupForm").addEventListener("submit", function(event) {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;

            if (name === "" || email === "") {
                alert("Please fill in all fields before submitting!");
                event.preventDefault(); 
            }
        });
    });


