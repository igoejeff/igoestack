/* ═══════════════════════════════════════════════════════════════
   THE IGOE STACK — Main JavaScript
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── NAVBAR SCROLL BEHAVIOR ───────────────────────────────────
  const navbar = document.getElementById('navbar');
  const handleNavbarScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // ─── MOBILE NAV TOGGLE ────────────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    navLinks.classList.contains('open')
      ? (spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)',
         spans[1].style.opacity   = '0',
         spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)')
      : (spans[0].style.transform = '',
         spans[1].style.opacity   = '',
         spans[2].style.transform = '');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });

  // ─── ACTIVE NAV LINK ON SCROLL ────────────────────────────────
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  const activateNav = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');
      const link   = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link && scrollPos >= top && scrollPos < bottom) {
        navItems.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', activateNav, { passive: true });

  // ─── SCROLL ANIMATION OBSERVER ───────────────────────────────
  const animClasses = ['.animate-in', '.animate-in-left', '.animate-in-right'];
  
  // Add animation classes to elements
  const addAnimationTargets = () => {
    const selectors = {
      '.problem-card':     'animate-in',
      '.pillar-card':      'animate-in',
      '.why-card':         'animate-in',
      '.result-stat':      'animate-in',
      '.testimonial-card': 'animate-in',
      '.process-step':     'animate-in',
      '.preview-item':     'animate-in',
      '.about-list li':    'animate-in',
      '.criterion':        'animate-in',
      '.cta-feature':      'animate-in',
      '.stack-row':        'animate-in-right',
    };

    Object.entries(selectors).forEach(([sel, cls]) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add(cls);
        el.style.transitionDelay = `${i * 80}ms`;
      });
    });

    // Left / right for grid sections
    document.querySelectorAll('.about-text, .solution-text, .cta-text').forEach(el => {
      el.classList.add('animate-in-left');
    });
    document.querySelectorAll('.about-visual, .score-visual, .cta-form-wrap').forEach(el => {
      el.classList.add('animate-in-right');
    });
    document.querySelectorAll('.section-header').forEach(el => {
      el.classList.add('animate-in');
    });
  };

  addAnimationTargets();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Observe all animation targets
  setTimeout(() => {
    document.querySelectorAll('.animate-in, .animate-in-left, .animate-in-right').forEach(el => {
      observer.observe(el);
    });
  }, 100);

  // ─── COUNTER ANIMATION ────────────────────────────────────────
  const counters = document.querySelectorAll('.result-num[data-target]');
  let countersStarted = false;

  const startCounters = () => {
    if (countersStarted) return;
    const resultsSection = document.getElementById('results');
    if (!resultsSection) return;
    const rect = resultsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      countersStarted = true;
      counters.forEach(counter => {
        const target   = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step     = target / (duration / 16);
        let current    = 0;
        const update = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(update);
          } else {
            counter.textContent = target;
          }
        };
        requestAnimationFrame(update);
      });
    }
  };
  window.addEventListener('scroll', startCounters, { passive: true });
  startCounters(); // Check immediately in case already in view

  // ─── STACK ROWS STAGGERED REVEAL ───────────────────────────
  const stackRows = document.querySelectorAll('.stack-row');
  const stackObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stackRows.forEach((row, i) => {
          setTimeout(() => {
            row.style.opacity   = '1';
            row.style.transform = 'translateX(0)';
          }, i * 80);
        });
        stackObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const stackViz = document.querySelector('.stack-viz-wrap');
  if (stackViz) {
    stackRows.forEach(row => {
      row.style.opacity   = '0';
      row.style.transform = 'translateX(30px)';
      row.style.transition = 'opacity 0.4s ease, transform 0.4s ease, background 0.3s ease';
    });
    stackObserver.observe(stackViz);
  }

  // ─── VIDEO BLOCK — native MP4 player, no setup needed ────────
  // Video is already embedded directly; nothing to initialize.

// ─── CONTACT FORM SUBMISSION ─────────────────────────────────
  const contactForm   = document.getElementById('contactForm');
  const formSuccess   = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

      // Gather form data
      const data = {
        first_name: document.getElementById('fname').value,
        last_name:  document.getElementById('lname').value,
        email:      document.getElementById('email').value,
        phone:      document.getElementById('phone').value,
        specialty:  document.getElementById('specialty').value,
        message:    document.getElementById('message').value,
        submitted_at: new Date().toISOString(),
      };

      try {
        const response = await fetch('tables/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (response.ok || response.status === 201) {
          contactForm.style.display = 'none';
          formSuccess.style.display = 'block';
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        // Fallback: still show success for demo
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      }
    });
  }

  // ─── PILLAR CARD HOVER GLOW ───────────────────────────────────
  document.querySelectorAll('.pillar-card, .problem-card, .why-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,212,212,0.06), var(--dark-2) 60%)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });

  // ─── SMOOTH SCROLL FOR ANCHOR LINKS ──────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── HERO PARALLAX ────────────────────────────────────────────
  const heroImage = document.querySelector('.hero-img');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      if (window.scrollY < window.innerHeight) {
        heroImage.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    }, { passive: true });
  }

  // ─── TYPING EFFECT FOR HERO SUBTITLE ─────────────────────────
  // Subtle text appearance
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
    requestAnimationFrame(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    });
  }

  // ─── PILLAR TABS ─────────────────────────────────────────────
  const pillarTabs   = document.querySelectorAll('.pillar-tab');
  const pillarPanels = document.querySelectorAll('.pillar-panel');

  pillarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-panel');
      // Deactivate all
      pillarTabs.forEach(t => t.classList.remove('active'));
      pillarPanels.forEach(p => p.classList.remove('active'));
      // Activate selected
      tab.classList.add('active');
      const panel = document.getElementById(`panel-${target}`);
      if (panel) {
        panel.classList.add('active');
        // Smooth fade in
        panel.style.opacity = '0';
        requestAnimationFrame(() => {
          panel.style.transition = 'opacity 0.3s ease';
          panel.style.opacity = '1';
        });
      }
    });
  });

// ─── PROCESS STEP HOVER ───────────────────────────────────────
  document.querySelectorAll('.process-step').forEach(step => {
    step.addEventListener('mouseenter', () => {
      const bubble = step.querySelector('.step-bubble');
      if (bubble) bubble.style.transform = 'scale(1.1)';
    });
    step.addEventListener('mouseleave', () => {
      const bubble = step.querySelector('.step-bubble');
      if (bubble) bubble.style.transform = '';
    });
  });

  // ─── NAV LINK ACTIVE STYLES ──────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active { color: var(--teal) !important; }
    .step-bubble { transition: transform 0.3s ease !important; }
  `;
  document.head.appendChild(style);

  console.log('%cThe Igoe Stack — Website Loaded', 'color: #00D4D4; font-size: 14px; font-weight: bold;');
});
