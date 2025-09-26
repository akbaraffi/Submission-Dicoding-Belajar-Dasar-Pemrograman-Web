document.addEventListener("click", (event) => {
  const a = event.target.closest("nav a");
  if (!a) return;

  const target = document.querySelector(a.getAttribute("href"));
  if (!target) return;
  
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}); 