document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.getElementById("login-page");
    const signupPage = document.getElementById("signup-page");
    const toSignupLink = document.getElementById("to-signup");
    const toLoginLink = document.getElementById("to-login");

    toSignupLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginPage.classList.add("hidden");
        signupPage.classList.remove("hidden");
    });

    toLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        signupPage.classList.add("hidden");
        loginPage.classList.remove("hidden");
    });

    // Optional: Handle form submission (add your logic here)
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login submitted! (Implement backend call)");
    });

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Sign-Up submitted! (Implement backend call)");
    });
});
