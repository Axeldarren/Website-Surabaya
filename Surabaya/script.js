  const modeToggle = document.getElementById('mode-toggle');
  const body = document.body;

  // Toggle between dark and light mode
  modeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    // Change button text based on mode
    if (body.classList.contains('dark-mode')) {
      modeToggle.textContent = 'Switch to Light Mode';
    } else {
      modeToggle.textContent = 'Switch to Dark Mode';
    }
  });
