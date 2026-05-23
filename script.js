// HAMBURGER MENU (works on all pages)
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
}

// SEARCH TOGGLE
const searchToggle = document.getElementById('search-toggle');
const searchForm   = document.getElementById('search-form');
const searchInput  = document.getElementById('search-input');

if (searchToggle && searchForm) {
  searchToggle.addEventListener('click', () => {
    const isOpen = searchForm.classList.toggle('open');
    searchToggle.style.display = isOpen ? 'none' : 'inline-block';
    if (isOpen) searchInput.focus();
  });

  // Close search when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target) && e.target !== searchToggle) {
      searchForm.classList.remove('open');
      searchToggle.style.display = 'inline-block';
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchForm.classList.remove('open');
      searchToggle.style.display = 'inline-block';
    }
  });
}

// LIVE BADGE BLINK EFFECT
setInterval(() => {
  document.querySelectorAll('.stream-live-badge').forEach(el => {
    el.style.opacity = el.style.opacity === '0.3' ? '1' : '0.3';
  });
}, 600);

// PRICING
function selectPlan(plan) {
  alert('You have selected the ' + plan + ' plan');
}

// FEEDBACK
function showError(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.display = 'block';
}

function clearError(id) {
  const el = document.getElementById(id);
  el.style.display = 'none';
  el.textContent = '';
}

function submitFeedback() {
  const name    = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const success = document.getElementById('successMsg');

  success.style.display = 'none';
  clearError('nameError');
  clearError('messageError');

  let valid = true;

  if (!name) {
    showError('nameError', 'Name is required.');
    valid = false;
  } else if (name.length < 3) {
    showError('nameError', 'Name must be at least 3 characters.');
    valid = false;
  }

  if (!message) {
    showError('messageError', 'Message is required.');
    valid = false;
  }

  if (!valid) return;

  success.textContent = 'Thank you for your feedback, ' + name + '!';
  success.style.display = 'block';
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
}

// LOGIN
function loginUser() {
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }
  if (email === 'admin@gmail.com' && password === '1234') {
    alert('Login successful!');
    window.location.href = 'index.html';
  } else {
    alert('Invalid login details');
  }
}