document.body.style.backgroundColor = "lightblue";
document.body.style.textAlign = "center";
document.body.style.padding = "200px";
document.body.style.fontFamily = "Arial, sans-serif";


document.getElementById("loginForm").onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simple validation
    if (username === "" || password === "") {
        document.getElementById("message").innerText = "Please fill in all fields.";
        return;
    }

    // Simulate login success
    alert("Login successful!");
    document.getElementById("message").innerText = "Login successful, you're been redirected...!";
   // document.getElementById("message").innerText = "please wait";

};

//login-header styling

let loginHeader = document.getElementById("loginHeader");
loginHeader.style.background = "purple";
loginHeader.style.color = "white";
loginHeader.style.fontSize = "24px";
loginHeader.style.borderRadius = "5px";
loginHeader.style.padding = "10px 20px";

//login-button styling

let loginButton = document.getElementById("loginButton");
loginButton.style.background = "purple";
loginButton.style.cursor = "pointer";
loginButton.style.padding = "10px 20px";
loginButton.style.border = "2px solid purple";
loginButton.style.borderRadius = "5px";


loginButton.onmouseover = function (hovered) {
    loginButton.style.color = "lightblue";

};
loginButton.onmouseout = function (notHovered) {
    loginButton.style.color = "black";
};

let container = document.getElementById("container");
container.style.borderBlock = "3px solid purple";
// container.body.style.width = "500px";