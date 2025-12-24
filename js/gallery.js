const users = JSON.parse(localStorage.getItem("users")) || {};
const gallery = document.getElementById("gallery");
const publicGallery = document.getElementById("publicGallery");

const params = new URLSearchParams(window.location.search);
const username = params.get("username");

if (username && users[username]) {
  document.getElementById("userTitle").innerText = username + "'s Gallery";
  users[username].images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    publicGallery.appendChild(image);
  });
}

if (gallery) {
  Object.values(users).forEach(user => {
    user.images.forEach(img => {
      const image = document.createElement("img");
      image.src = img;
      gallery.appendChild(image);
    });
  });
}