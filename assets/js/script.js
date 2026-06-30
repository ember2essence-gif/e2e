
      // GSAP Animations
      gsap.registerPlugin(ScrollTrigger);
  
      document.querySelectorAll('[data-gsap]').forEach(el => {
        const effect = el.getAttribute('data-gsap');
        gsap.from(el, {
          opacity: 0,
          y: effect.includes('up') ? 50 : (effect.includes('left') ? -50 : 50),
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
  
      // FAQ Accordion
      document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
          if (!isActive) item.classList.add('active');
          item.querySelector('i').classList.toggle('fa-plus', !isActive);
          item.querySelector('i').classList.toggle('fa-minus', isActive);
        });
      });
  
      // Form submit (prevent default + optional)
      document.getElementById('subscribeForm').addEventListener('submit', function(e) {
      // Optional JS alert
      const name = this.querySelector('input[name="name"]').value;
      const email = this.querySelector('input[name="email"]').value;
      
      if(!name || !email){
          alert('Please fill out all fields.');
          e.preventDefault(); // Stop form submission
      } else {
          alert('Thank you! We’ll be in touch soon.');
          // Form will still submit to PHP backend
      }
  });

  
