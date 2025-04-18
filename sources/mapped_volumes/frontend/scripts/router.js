import { renderTemplate } from './renderer.js'

const routes = {
    '/': 'home.html',
    '/profile': 'profile.html',
    '/account': 'account.html',
    'default': '404.html'
};

export async function router() {
    const path = window.location.pathname;
    const route = routes[path] || routes['default'];

    const app = document.getElementById('app');
    const response = await fetch('/scripts/templates/' + route);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const parser = new DOMParser();
    const template = parser.parseFromString(await response.text(), 'text/html');

    const rendering = await renderTemplate(template, path);
    app.innerHTML = rendering;
}

export function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}
