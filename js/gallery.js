if (!localStorage.getItem("allImages")) {
  const demoImages = [
    { src: "https://picsum.photos/400/600?1", user: "demo" },
    { src: "https://picsum.photos/400/500?2", user: "demo" },
    { src: "https://picsum.photos/400/700?3", user: "demo" },
    { src: "https://picsum.photos/400/650?4", user: "demo" }
  ];
  localStorage.setItem("allImages", JSON.stringify(demoImages));
}
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