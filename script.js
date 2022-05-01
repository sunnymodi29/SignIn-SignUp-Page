const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// password show hide -------- signin
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('hide').style.display = "inline-block";
        document.getElementById('show').style.display = "none";
    }
    else {
        x.type = "password";
        document.getElementById('hide').style.display = "none";
        document.getElementById('show').style.display = "inline-block";
    }
}

// password show hide -------- signup
function myFunction2() {
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('hide2').style.display = "inline-block";
        document.getElementById('show2').style.display = "none";
    }
    else {
        x.type = "password";
        document.getElementById('hide2').style.display = "none";
        document.getElementById('show2').style.display = "inline-block";
    }
}