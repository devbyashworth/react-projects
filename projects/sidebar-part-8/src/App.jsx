import { useState } from "react";
import SidebarItem, { SIDEBAR_ITEMS } from "./SidebarItem.jsx";

const App = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handlePageClick = (id) => {
    setActiveItem(id);
    setOpenSubmenu(null);
  };

  const handleSubmenuToggle = (id) => {
    setOpenSubmenu((prev) => (prev === id ? null : id));
    setActiveItem(id);
  };

  return (
    <aside className="sidebar">
      <header>
        <img src="./dev_by_ashworth.png" alt="LOGO" className="logo" />
      </header>

      <ul>
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            activeItem={activeItem}
            isOpen={openSubmenu === item.id}
            onPageClick={handlePageClick}
            onSubmenuToggle={handleSubmenuToggle}
          />
        ))}
      </ul>
    </aside>
  );
};

export default App;
