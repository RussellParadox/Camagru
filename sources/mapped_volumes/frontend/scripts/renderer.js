const routes = {
    '/': 'home.js',
    '/profile': 'profile.js',
    '/account': 'account.js',
    'default': 'default.js'
}

export async function renderTemplate(template, path) {
    const route = routes[path] || routes['default'];
    var rendering = "";

    await import('./renderers/' + route)
        .then((module) => {
            rendering = module.renderer(template);
        })
        .catch((error) => {
            console.log(error);
        });
    return rendering;
}