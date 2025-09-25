import { useState } from "react";
import SubMenu from "./SubMenu";

const menuItems = [
  { name: "Home", icon: "home" },
  {
    name: "Settings",
    icon: "settings",
    items: ["Display", "Editor", "Theme", "Interface"],
  },
  {
    name: "Create",
    icon: "create",
    items: ["Article", "Document", "Report"],
  },
  {
    name: "Account",
    icon: "account_circle",
    items: ["Dashboard", "Logout"],
  },
  {
    name: "Products",
    icon: "deployed_code_update",
  },
  {
    name: "Favorites",
    icon: "favorite",
  },
];

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const NavHeader = () => (
  <header className="sidebar-header">
    <button type="button">
      <Icon icon="menu" />
    </button>
    <span>Admin</span>
  </header>
);

const NavButton = ({ onClick, name, icon, isActive, hasSubNav }) => (
  <button
    type="button"
    className={`nav-button ${isActive ? "active" : ""}`}
    onClick={() => onClick(name)}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && <Icon icon="expand_more" />}
  </button>
);

const App = () => {
  const [openParent, setOpenParent] = useState("");
  const [activeItem, setActiveItem] = useState("");

  const handleParentClick = (item) => {
    // If clicking the same parent, toggle it closed.
    if (openParent === item) {
      setOpenParent("");
    } else {
      setOpenParent(item);
    }
    // Also clear activeItem if switching parent — optional.
    setActiveItem("");
  };

  const handleSubItemClick = (item) => {
    setActiveItem(item);
  };

  const handleSingleClick = (item) => {
    // Clicking a single-level link closes any open submenu:
    setOpenParent("");
    setActiveItem(item);
  };

  return (
    <aside className="sidebar">
      <NavHeader />
      {menuItems.map((item) => (
        <div key={item.name}>
          <NavButton
            onClick={item.items ? handleParentClick : handleSingleClick}
            name={item.name}
            icon={item.icon}
            isActive={openParent === item.name || activeItem === item.name}
            hasSubNav={!!item.items}
          />
          {item.items && (
            <SubMenu
              item={item}
              openParent={openParent}
              activeItem={activeItem}
              handleSubItemClick={handleSubItemClick}
            />
          )}
        </div>
      ))}
    </aside>
  );
};

export default App;
