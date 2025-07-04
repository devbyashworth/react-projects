import React, { useRef, useState } from "react";

const App = () => {
  const [width, setWidth] = useState(260);
  const sidebarRef = useRef(null);

  const items = [
    { name: "home", icon: "home" },
    { name: "favorites", icon: "favorite" },
    { name: "products", icon: "inventory" },
    { name: "testimonials", icon: "forum" },
    { name: "security", icon: "security" },
    { name: "settings", icon: "settings" },
  ];

  const Icon = ({ icon, className = "" }) => (
    <span className={`material-symbols-outlined ${className}`}>{icon}</span>
  );

  const resize = (evt) => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    let newWidth = evt.clientX - sidebar.getBoundingClientRect().left;
    if (newWidth < 60) newWidth = 60;
    if (newWidth > 260) newWidth = 260;
    setWidth(newWidth);
  };

  const stopResize = () => {
    document.body.style.cursor = "default";
    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stopResize);
  };

  const initResize = () => {
    document.body.style.cursor = "col-resize";
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  };

  return (
    <main className="container">
      <aside
        ref={sidebarRef}
        style={{ width: `${width}px` }}
        className="sidebar"
      >
        <div onMouseDown={initResize} className="handle"></div>
        <div className="inner" style={{ width: `${width}px` }}>
          <nav className="menu">
            {items.map((item) => (
              <button key={item.name}>
                <Icon icon={item.icon} />
                <p>{item.name}</p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
      <div className="main" style={{ marginLeft: `${width}px` }}>
        <h1>Dev by Ashworth</h1>
      </div>
    </main>
  );
};

export default App;
