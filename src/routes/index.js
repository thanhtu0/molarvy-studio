// NOTE Layouts
import { PressKitLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import New from '~/pages/News';
import PressKit from '~/pages/PressKit';
import Store from '~/pages/Store';
import Studio from '~/pages/Studio';

// NOTE - Public routes
// Routes that are accessible without authentication.
// These pages are available to all users, regardless of login status.
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/new', component: New },
    { path: '/presskit', component: PressKit, layout: PressKitLayout },
    { path: '/store', component: Store },
    { path: '/molarvy-studio', component: Studio },
];

// NOTE - Private routes
// Routes that require the user to be authenticated (logged in) to access.
// If a user is not logged in, they will be automatically redirected to the login page.
const privateRoutes = [];

export { publicRoutes, privateRoutes };
