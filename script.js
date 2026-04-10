 let cartCount = 0;
    const countEl = document.getElementById('cartCount');
    const toast   = document.getElementById('cartToast');
 
    document.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        cartCount++;
        countEl.textContent = cartCount;
 
        toast.textContent = `✓ ${btn.dataset.name} added to cart`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
      });
    });
 
    // ── SCROLL TO TOP ──
    const scrollBtn = document.getElementById('scrollTop');
 
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 300);
    });
 
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
 
    // ── NAVBAR ACTIVE LINK ──
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });