document.addEventListener("DOMContentLoaded", () => {
  // --- Apparition section About ---
  const aboutSection = document.querySelector('.about-container');
  if (aboutSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.style.opacity = 1;
          aboutSection.style.transform = 'translateY(0)';
          observer.unobserve(aboutSection);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(aboutSection);
  }

  // --- Lightbox pour galerie d'images ---
  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
      document.getElementById("lightboxImg").src = img.src;
      document.getElementById("lightbox").classList.remove("hidden");
    });
  });

  document.getElementById("closeLightbox").addEventListener("click", () => {
    document.getElementById("lightbox").classList.add("hidden");
  });

  // --- Bouton burger (menu mobile) ---
  const burger = document.getElementById('burgerBtn');
  const nav = document.querySelector('.nav-links');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.classList.toggle('open'); // <-- AJOUTÉ : permet d'animer le burger
    });

    // Animation au scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        burger.classList.add('scrolled');
      } else {
        burger.classList.remove('scrolled');
      }
    });
  }

  // --- Favoris (exemple dynamique) ---
  const favoritesList = document.getElementById('favoritesList');
  if (favoritesList) {
    function addFavoriteSpot(title, description) {
      const emptyMsg = document.querySelector('.empty-msg');
      if (emptyMsg) emptyMsg.remove();

      const card = document.createElement('div');
      card.className = 'favorite-card';
      card.innerHTML = `
        <h3 class="favorite-title">${title}</h3>
        <p class="favorite-desc">${description}</p>
      `;
      favoritesList.appendChild(card);
    }

    // Exemple test (à retirer ou adapter)
    addFavoriteSpot("Uluwatu, Bali", "Perfect spot for golden hour over cliffs.");
  }
});
