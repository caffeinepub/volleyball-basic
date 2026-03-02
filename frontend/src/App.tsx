import { createRouter, RouterProvider, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutCoach from './pages/AboutCoach';
import TrainingPrograms from './pages/TrainingPrograms';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: AboutCoach });
const programsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/programs', component: TrainingPrograms });
const pricingRoute = createRoute({ getParentRoute: () => rootRoute, path: '/pricing', component: Pricing });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact });

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, programsRoute, pricingRoute, contactRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
