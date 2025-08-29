document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    document.querySelector("main").innerHTML = "<h2>Project not found</h2>";
    return;
  }

  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-desc").textContent = project.description;

  const imagesContainer = document.getElementById("project-images");

  if (project.images && project.images.length > 0) {
    project.images.forEach(img => {
      const imgEl = document.createElement("img");
      imgEl.src = img;
      imgEl.alt = project.title;
      imgEl.classList.add("project-img");

      // click to open lightbox
      imgEl.addEventListener("click", () => openLightbox(img));

      imagesContainer.appendChild(imgEl);
    });
  } else {
    // If no images available
    const msg = document.createElement("p");
    msg.textContent = "Images coming soon";
    msg.style.fontSize = "1.2rem";
    msg.style.marginBottom = "10px";
    imagesContainer.appendChild(msg);

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/hashirafridi"; // change if project-specific repo
    githubLink.target = "_blank";
    githubLink.textContent = "Check code on my GitHub";
    githubLink.style.display = "inline-block";
    githubLink.style.color = "#007bff";
    githubLink.style.textDecoration = "none";
    githubLink.style.fontWeight = "bold";

    // hover effect
    githubLink.addEventListener("mouseover", () => {
      githubLink.style.textDecoration = "underline";
    });
    githubLink.addEventListener("mouseout", () => {
      githubLink.style.textDecoration = "none";
    });

    imagesContainer.appendChild(githubLink);
  }
});

// --- Lightbox ---
function openLightbox(src) {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";

  const img = document.createElement("img");
  img.src = src;

  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  // close when clicked anywhere
  lightbox.addEventListener("click", () => {
    lightbox.remove();
  });
}

