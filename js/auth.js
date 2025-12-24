function signup(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || {};
  users[username] = { password, images: [] };
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful!");
  window.location.href = "login.html";
}

function login(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username] && users[username].password === password) {
    localStorage.setItem("currentUser", username);
    window.location.href = "profile.html";
  } else {
    alert("Invalid credentials");
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}