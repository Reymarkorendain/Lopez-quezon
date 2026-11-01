document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".footer-inner");

  if (footer) {
    footer.innerHTML = `
      <p>Lopez, Quezon</p>
      <p>Tour guide website • ${year}</p>
    `;
  }
});