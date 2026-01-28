const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const searchInput = document.getElementById("searchInput");
const recipeCards = document.querySelectorAll(".recipe-card");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentCategory = "all";

if (searchInput) {
  searchInput.addEventListener("keyup", filterRecipes);
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    filterRecipes();
  });
});

function filterRecipes() {
  const searchValue = searchInput.value.toLowerCase();

  recipeCards.forEach(card => {
    const name = card.dataset.name;
    const category = card.dataset.category;

    const matchSearch = name.includes(searchValue);
    const matchCategory = currentCategory === "all" || category === currentCategory;

    card.style.display = (matchSearch && matchCategory) ? "block" : "none";
  });
}
