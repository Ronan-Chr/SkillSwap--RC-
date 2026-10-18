document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    const tutor = card.querySelector(".provider").textContent;
    alert(title + " with " + tutor + "\n" + card.dataset.info);
  });
});