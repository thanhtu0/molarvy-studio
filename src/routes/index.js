import { Navigate } from 'react-router-dom';

// NOTE Layouts
import { PressKitLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import About from '~/pages/About';
import New from '~/pages/News';
import Media from '~/pages/Media';
import PressKit from '~/pages/PressKit';
import Store from '~/pages/Store';
import Studio from '~/pages/Studio';
import InterviewDetailPage from '~/pages/InterviewDetail';
import NewDetailPage from '~/pages/NewDetailPage';

// NOTE - Private routes
// Routes that require the user to be authenticated (logged in) to access.
// If a user is not logged in, they will be automatically redirected to the login page.
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/news', component: New },
    { path: '/about', component: About },
    { path: '/media', component: Media },
    { path: '/presskit', component: PressKit, layout: PressKitLayout },
    {
        path: '/presskit',
        component: () => <Navigate to="/presskit/" replace />,
        layout: null,
    },

    { path: '/store', component: Store },
    { path: '/molarvy-studio', component: Studio },

    { path: '/interviews/:slug', component: InterviewDetailPage },
    { path: '/news/:slug', component: NewDetailPage },
];

// NOTE - Public routes
// Routes that are accessible without authentication.
// These pages are available to all users, regardless of login status.
const privateRoutes = [];

export { publicRoutes, privateRoutes };
