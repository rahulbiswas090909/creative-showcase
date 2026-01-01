// Demo images for landing page (always visible)
let users = JSON.parse(localStorage.getItem("users")) || {};

if (Object.keys(users).length === 0) {
  users = {
    demo: {
      images: [
        "https://picsum.photos/400/600?random=1",
        "https://picsum.photos/400/500?random=2",
        "https://picsum.photos/400/700?random=3",
        "https://picsum.photos/400/650?random=4"
      ]
    }
  };
  localStorage.setItem("users", JSON.stringify(users));
}

const gallery = document.getElementById("gallery");
const publicGallery = document.getElementById("publicGallery");

const params = new URLSearchParams(window.location.search);
const username = params.get("username");

// Public profile page (safe)
if (username && users[username] && publicGallery) {
  const title = document.getElementById("userTitle");
  if (title) {
    title.innerText = username + "'s Gallery";
  }

  users[username].images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    publicGallery.appendChild(image);
  });
}

// Landing page gallery
if (gallery) {
  Object.values(users).forEach(user => {
    user.images.forEach(img => {
      const image = document.createElement("img");
      image.src = img;
      gallery.appendChild(image);
    });
  });
}