import { navigateTo, router } from "./router.js";

window.addEventListener('popstate', router); // ← Back/Forward buttons
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router(); // Load initial route
});