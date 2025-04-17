const routes = {
    '/': 'home.html',
    '/profile': 'profile.html',
    '/account': 'account.html',
};

export async function router() {
    const path = window.location.pathname;
    const route = routes[path] || './templates/404.html';

    console.log(route)
    const app = document.getElementById('app');
    const response = await fetch('/scripts/templates/' + route);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    app.innerHTML = await response.text();
}

export function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}
