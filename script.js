$(document).ready(function () {
    // Sélection des éléments
    const envelope = $('#envelope');
    const btnOpen = $("#open");
    const popup = $('#popup');
    const closePopup = $('#closePopup');
    const contactForm = $('#contactForm');
  
    // Ouvrir l'enveloppe
    btnOpen.click(() => envelope.addClass('open').removeClass('close'));
  
    // Initialiser EmailJS
    emailjs.init("NKdPXj4TzASrP1p95"); // Remplace par ta clé publique
  
    // Soumission du formulaire
    contactForm.submit(function (e) {
      e.preventDefault(); // Empêche le rechargement de la page
  
      const formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
      };
  
      emailjs.send("service_sdyrjun", "template_jldeevf", formData)
        .then(() => {
          popup.fadeIn(); // Afficher la popup
          envelope.addClass('close').removeClass('open'); // Fermer l'enveloppe
          contactForm[0].reset(); // Réinitialiser le formulaire
        })
        .catch(error => alert("Failed to send message: " + JSON.stringify(error)));
    });
  
    // Fermer la popup quand on clique sur "OK"
    closePopup.click(() => popup.fadeOut());
  });
  