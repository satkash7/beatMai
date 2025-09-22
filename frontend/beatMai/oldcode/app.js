// Fonction pour basculer le menu mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

// Fonction pour vérifier si un élément est visible à l'écran
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour déclencher les animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in'); // ou 'slide-up' selon l'effet souhaité
            element.classList.remove('hidden'); // Retirer la classe hidden une fois l'animation déclenchée
        }
    });
}

// Écouter l'événement de défilement pour les animations
window.addEventListener('scroll', handleScrollAnimations);

// Déclencher une première vérification au chargement de la page
window.addEventListener('load', () => {
    handleScrollAnimations();
});

// Appeler la fonction au chargement de la page pour initialiser l'état des champs
document.addEventListener('DOMContentLoaded', function() {
    toggleBesoinFormation();
});

// Fonction pour soumettre le formulaire de candidature
function submitCandidatureForm(event) {
    event.preventDefault(); // Empêche la soumission standard du formulaire

    const niveauExpertise = document.getElementById('niveau_expertise').value;
    const temoignage = document.getElementById('temoignage').value;

    // Validation du champ témoignage pour les juniors
    if (niveauExpertise === 'junior' && temoignage.trim() === '') {
        alert('Le champ témoignage est obligatoire pour les juniors.');
        return;
    }

    // Envoi des données via Fetch API
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const messageContainer = document.getElementById('messageContainer');
        if (data.status === 'success') {
            messageContainer.innerHTML = `<div class="success">${data.message}</div>`;
            form.reset(); // Réinitialise le formulaire après une soumission réussie
        } else {
            messageContainer.innerHTML = `<div class="error">${data.message}</div>`;
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.innerHTML = `<div class="error">Une erreur s'est produite lors de la soumission du formulaire.</div>`;
    });
}

// Fonction pour afficher/masquer les champs liés aux plans stratégiques
function togglePlanFields() {
    const sujet3Checked = document.getElementById('sujet3').checked;
    const planStrategiqueGroup = document.getElementById('plan_strategique_group');
    const mobilisationFondsGroup = document.getElementById('mobilisation_fonds_group');
    
    if (sujet3Checked) {
        planStrategiqueGroup.style.display = 'block';
        mobilisationFondsGroup.style.display = 'block';
    } else {
        planStrategiqueGroup.style.display = 'none';
        mobilisationFondsGroup.style.display = 'none';
        // Réinitialiser les champs cachés
        document.getElementById('premier_plan_strategique').value = '';
        document.getElementById('premier_plan_mobilisation').value = '';
        document.getElementById('periode_plan_strategique').value = '';
        document.getElementById('periode_plan_mobilisation').value = '';
        document.getElementById('annee_plan_strategique_group').style.display = 'none';
        document.getElementById('annee_plan_mobilisation_group').style.display = 'none';
    }
}

// Fonction pour afficher/masquer le champ période pour le plan stratégique
function toggleAnneePlanStrategique() {
    const premierPlan = document.getElementById('premier_plan_strategique').value;
    const anneeGroup = document.getElementById('annee_plan_strategique_group');
    
    if (premierPlan === 'non') {
        anneeGroup.style.display = 'block';
    } else {
        anneeGroup.style.display = 'none';
        document.getElementById('periode_plan_strategique').value = '';
    }
}

// Fonction pour afficher/masquer le champ période pour la mobilisation des fonds
function toggleAnneePlanMobilisation() {
    const premierPlan = document.getElementById('premier_plan_mobilisation').value;
    const anneeGroup = document.getElementById('annee_plan_mobilisation_group');
    
    if (premierPlan === 'non') {
        anneeGroup.style.display = 'block';
    } else {
        anneeGroup.style.display = 'none';
        document.getElementById('periode_plan_mobilisation').value = '';
    }
}

// Fonction pour soumettre le formulaire ONG
function submitONGForm(event) {
    event.preventDefault();
    
    // Validation des périodes si elles sont visibles
    if (document.getElementById('annee_plan_strategique_group').style.display === 'block') {
        const periodeStrategique = document.getElementById('periode_plan_strategique').value;
        if (!/^\d{4}-\d{4}$/.test(periodeStrategique)) {
            alert('Veuillez entrer une période valide pour le plan stratégique (format: 2010-2015)');
            return;
        }
    }
    
    if (document.getElementById('annee_plan_mobilisation_group').style.display === 'block') {
        const periodeMobilisation = document.getElementById('periode_plan_mobilisation').value;
        if (!/^\d{4}-\d{4}$/.test(periodeMobilisation)) {
            alert('Veuillez entrer une période valide pour la mobilisation des fonds (format: 2010-2015)');
            return;
        }
    }
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const messageContainer = document.getElementById('messageContainerONG');
        if (data.status === 'success') {
            messageContainer.innerHTML = `<div class="success">${data.message}</div>`;
            form.reset();
            // Masquer les sections conditionnelles après soumission
            document.getElementById('plan_strategique_group').style.display = 'none';
            document.getElementById('mobilisation_fonds_group').style.display = 'none';
        } else {
            messageContainer.innerHTML = `<div class="error">${data.message}</div>`;
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        const messageContainer = document.getElementById('messageContainerONG');
        messageContainer.innerHTML = `<div class="error">Une erreur s'est produite lors de la soumission du formulaire.</div>`;
    });
}

// Smooth scrolling pour toutes les cartes
function initSmoothScrolling() {
    const scrollableCards = document.querySelectorAll('.scrollable-content');
    
    scrollableCards.forEach(card => {
        card.addEventListener('wheel', function(e) {
            if (this.scrollHeight > this.clientHeight) {
                e.preventDefault();
                this.scrollTop += e.deltaY / 2;
            }
        }, { passive: false });
    });
}

document.addEventListener('DOMContentLoaded', initSmoothScrolling);

  // Active/désactive l'effet de flip au clic sur mobile
  document.querySelectorAll('.flip-card-container').forEach(container => {
    container.addEventListener('click', function () {
      this.querySelector('.flip-card').classList.toggle('flipped');
    });
  });

  // Affiche le loader au chargement
  window.addEventListener("load", () => {
    document.getElementById("page-loader").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("page-loader").style.display = "none";
    }, 300);
  });

  // Active le loader à chaque clic sur un lien
  document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      // Ignorer les ancres ou liens vers des fichiers téléchargeables
      if (href.startsWith("#") || href.endsWith(".pdf") || link.target === "_blank") return;
      document.getElementById("page-loader").style.display = "flex";
      document.getElementById("page-loader").style.opacity = 1;
    });
  });
// Initialisation du traducteur
function initGoogleTranslate() {
    // Créer l'instance Google Translate
    new google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'en,es,pt,sw',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    // Synchroniser les changements de langue
    document.getElementById('language-selector').addEventListener('change', function() {
        const lang = this.value;
        const googleSelect = document.querySelector('.goog-te-combo');
        
        if (googleSelect) {
            googleSelect.value = lang;
            googleSelect.dispatchEvent(new Event('change'));
        }
    });

    // Masquer les éléments indésirables
    const style = document.createElement('style');
    style.innerHTML = `
        .goog-te-gadget-icon, .goog-te-menu-value span { display: none !important; }
        .goog-te-menu-value { color: transparent !important; }
    `;
    document.head.appendChild(style);
}

// Chargement asynchrone de l'API
if (!window.google || !google.translate) {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=initGoogleTranslate';
    document.head.appendChild(script);
} else {
    initGoogleTranslate();
}
// Au chargement
const savedLang = localStorage.getItem('beat-lang');
if (savedLang) {
    document.getElementById('language-selector').value = savedLang;
    // Déclencher la traduction si nécessaire
    if (savedLang !== 'fr') {
        setTimeout(() => {
            const event = new Event('change');
            document.getElementById('language-selector').dispatchEvent(event);
        }, 500);
    }
}

// Dans l'écouteur d'événement 'change'
localStorage.setItem('beat-lang', this.value);
setInterval(() => {
    const banners = document.querySelectorAll('.goog-te-banner-frame');
    banners.forEach(b => b.style.display = 'none');
}, 1000);