/* ============================================================
   Vergel Emmanuel Mata | Bookkeeping VA — JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ============ MOBILE MENU ============
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ============ MARQUEE TICKER ============
  const marqueeItems = [
    'Data Entry', 'Categorize Transactions',
    'Accounts Receivable Management',
    'Accounts Payable Management',
    'Bank Reconciliation',
    'Generate Financial Reports'
  ];

  function buildMarqueeHTML() {
    var tripled = [].concat(marqueeItems, marqueeItems, marqueeItems);
    return tripled.map(function (item, i) {
      var sep = i < tripled.length - 1 ? ' <span class="sep">&mdash;</span>' : '';
      return '<span>' + item + '</span>' + sep;
    }).join(' ');
  }

  var marqueeContent = document.getElementById('marqueeContent');
  var marqueeContentDup = document.getElementById('marqueeContentDup');

  if (marqueeContent && marqueeContentDup) {
    var html = buildMarqueeHTML();
    marqueeContent.innerHTML = html;
    marqueeContentDup.innerHTML = html;
  }

  // ============ CONTACT FORM (Formspree) ============
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var form = this;
      var data = new FormData(form);
      fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
        .then(function (res) {
          if (res.ok) {
            alert('Thanks for reaching out! I will respond within 24 hours.');
            form.reset();
          } else {
            alert('Something went wrong. Please try again or email me directly.');
          }
        })
        .catch(function () {
          alert('Something went wrong. Please try again or email me directly.');
        });
    });
  }

  // ============ FADE-IN ON SCROLL FOR ALL SECTIONS ============
  var fadeSections = document.querySelectorAll('.hero, .section');

  fadeSections.forEach(function (section) {
    // trigger initial animation on load
    section.classList.add('in-view');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0 });

    observer.observe(section);
  });

  // ============ CERTIFICATION LIGHTBOX ZOOM ============
  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightboxImage');
  var lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImage && lightboxClose) {
    document.querySelectorAll('.cert-image img, .zoomable, .zoom-trigger').forEach(function (el) {
      el.addEventListener('click', function () {
        var imgSrc = this.tagName === 'IMG' ? this.src : this.querySelector('img').src;
        var imgAlt = this.tagName === 'IMG' ? this.alt : (this.querySelector('img').alt || 'Zoomed image');
        lightboxImage.src = imgSrc;
        lightboxImage.alt = imgAlt;
        lightbox.classList.add('open');
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }
});
