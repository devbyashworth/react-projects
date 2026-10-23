import { createContext, useCallback, useContext, useState } from "react";

import {
  BrowserRouter,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const pages = [
  {
    to: "/home",
    title: "Home",
    background: "#fefefe",
    color: "#111111",
  },
  {
    to: "/about",
    title: "About",
    background: "#000000",
    color: "#ffffff",
  },
  {
    to: "/contact",
    title: "Contact",
    background: "#fefefe",
    color: "#111111",
  },
  {
    to: "/services",
    title: "Services",
    background: "#000000",
    color: "#ffffff",
  },
];

const TransitionContext = createContext(null);

function Nav({ title }) {
  return (
    <nav className="nav">
      <h1 className="nav__title">{title}</h1>

      <ul className="nav__list">
        {pages.map((page) => (
          <li key={page.to}>
            <PageLink page={page} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Page({ title, background, color }) {
  return (
    <main className="page" style={{ backgroundColor: background, color }}>
      <Nav title={title} />
      <div className="page__content">
        <h2>{title}</h2>
        <p>Welcome to the {title} page.</p>
      </div>
    </main>
  );
}

function Bubbles({ transition, onAnimationEnd }) {
  return (
    <div
      className={`bubbles ${transition ? `bubbles--${transition.phase}` : ""}`}
      aria-hidden="true"
    >
      <div className="bubbles__first" />

      <div
        className="bubbles__second"
        style={{
          backgroundColor: transition?.page.background ?? "#8f44fd",
        }}
        onAnimationEnd={onAnimationEnd}
      />
    </div>
  );
}

function PageLink({ page }) {
  const transitionTo = useContext(TransitionContext);

  const handleClick = (event) => {
    // Preserve normal browser behavior for modified clicks.
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    // Do not animate when the current page is selected.
    if (window.location.pathname === page.to) {
      return;
    }

    event.preventDefault();
    transitionTo(page);
  };

  return (
    <NavLink
      to={page.to}
      onClick={handleClick}
      className={({ isActive }) =>
        isActive ? "nav__link active" : "nav__link"
      }
    >
      {page.title}
    </NavLink>
  );
}

function Layout() {
  const navigate = useNavigate();
  const [transition, setTransition] = useState(null);

  const transitionTo = useCallback((page) => {
    setTransition(
      (current) =>
        current ?? {
          page,
          phase: "covering",
        },
    );
  }, []);

  const handleAnimationEnd = (event) => {
    // Ignore animations bubbling from child elements.
    if (event.target !== event.currentTarget || !transition) {
      return;
    }

    if (
      event.animationName === "bubble-second-move" &&
      transition.phase === "covering"
    ) {
      navigate(transition.page.to);

      setTransition((current) =>
        current ? { ...current, phase: "holding" } : null,
      );
    }

    if (event.animationName === "hold" && transition.phase === "holding") {
      setTransition(null);
    }
  };

  return (
    <TransitionContext.Provider value={transitionTo}>
      <Bubbles transition={transition} onAnimationEnd={handleAnimationEnd} />
      <Outlet />
    </TransitionContext.Provider>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />

        {pages.map((page) => (
          <Route
            key={page.to}
            path={page.to.slice(1)}
            element={<Page {...page} />}
          />
        ))}
      </Route>

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
