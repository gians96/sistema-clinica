export interface RouterLink {
    name: string;
    path: string;
    title: string;
}

export const routeLinks: RouterLink[] = [
    { path: '/', name: 'inicio', title: 'Inicio' },
    { path: '/character/', name: 'home', title: 'Home' },
    { path: '/test', name: 'test', title: 'Test' },
    { path: '/character', name: 'Personajes', title: 'Personajes' },
    { path: '/app', name: 'app', title: 'App' }
]
export const subRouteLinks: RouterLink[] = [
    { path: '/characters/', name: 'inicio', title: 'Inicio' },
    { path: '/characters/list', name: 'Personajes', title: 'Personajes' },
    { path: '/characters/search', name: 'busqueda', title: 'App' }
]