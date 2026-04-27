document.querySelector("#contact-email").textContent = `${"support"}@${"kb-systems.dev"}`;

document.querySelector("#logo").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".navlinks").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const wasExpanded = card.classList.contains("expanded");
    
    document.querySelectorAll(".project-card.expanded").forEach(c => {
      c.classList.remove("expanded");
    });
    
    if (!wasExpanded) {
      card.classList.add("expanded");
    }
  });
});