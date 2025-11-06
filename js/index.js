document.addEventListener('DOMContentLoaded', () => {
  // 1. Replaced 'Giant' commands with AI-themed prompts
  const aiPrompts = [
    "Stop training the model!",
    "Process the data!",
    "That's enough learning for today.",
    "Archive this concept.",
    "Hide this layer.",
    "Shutdown the neural net.",
    "Query complete.",
    "End of line.",
    "Optimize parameters!",
    "Simulation finished."
  ];

  const sections = document.querySelectorAll('section');
  const removed = []; // keep removed sections here

  // 2. Updated button titles for the new theme
  sections.forEach(section => {
    const btn = document.createElement('button');
    // Used the new list and a thematic suffix
    const title = aiPrompts[Math.floor(Math.random() * aiPrompts.length)] + " Dismiss Concept!";
    btn.className = 'dismiss';
    btn.innerHTML = title;
    section.prepend(btn);
  });

  // 3. Changed the 'Reset' button text
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reload All Minds'; // Instead of 'Summon Giants again'
  resetBtn.id = 'reset';
  document.querySelector('header')?.appendChild(resetBtn); // Kept its original location (header)

  // 4. Dismiss handler - Remained the same as it's theme-independent
  document.addEventListener('click', e => {
    if (e.target.matches('.dismiss')) {
      const section = e.target.closest('section');
      removed.push(section.outerHTML); // store HTML for later restoration
      section.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      section.style.opacity = 0;
      section.style.transform = 'scale(0.95)';
      setTimeout(() => section.remove(), 400);
    }
  });

  // 5. Reset handler - Updated theme and fixed a bug
  resetBtn.addEventListener('click', () => {
    if (!removed.length) return;

    // --- FIX ---
    // The original code was appending sections *inside* the header.
    // This fix inserts them *after* the header (their correct place).
    const header = document.querySelector('header');

    // Reverse the array to re-append in the correct (top-down) order
    removed.reverse().forEach(html => {
      header.insertAdjacentHTML('afterend', html);
    });
    // --- END FIX ---

    removed.length = 0; // clear the list
  });
});
