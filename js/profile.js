const user = localStorage.getItem("currentUser");
if (!user) window.location.href = "login.html";

const users = JSON.parse(localStorage.getItem("users"));
const container = document.getElementById("myImages");

function uploadImage() {
  const file = document.getElementById("imageInput").files[0];
  const reader = new FileReader();

  reader.onload = function () {
    users[user].images.push(reader.result);
    localStorage.setItem("users", JSON.stringify(users));
    loadImages();
  };
  reader.readAsDataURL(file);
}

function loadImages() {
  container.innerHTML = "";
  users[user].images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    container.appendChild(image);
  });
}

loadImages();