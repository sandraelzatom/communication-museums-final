/**
 * Intersection Observer Logic
 * Triggers entrance animations when elements enter the viewport.
 */

const observerOptions = {
    root: null, // use the viewport
    threshold: 0.15, // trigger when 15% of element is visible
    rootMargin: "0px"
};

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            // Optional: stop observing after reveal
            // observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(revealCallback, observerOptions);

// Initialize Observer on all items with reveal class
document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll('.reveal-hidden');
    hiddenElements.forEach(el => observer.observe(el));
});
