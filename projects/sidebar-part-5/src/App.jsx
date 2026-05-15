import { useState } from "react";
import Blocks from "./Blocks";

const items = [
  {
    name: "Hosting",
    icon: "host",
    subItems: [
      { name: "Cloud", icon: "cloud" },
      { name: "DNS", icon: "dns" },
      { name: "API Keys", icon: "key" },
    ],
  },
  {
    name: "Storage",
    icon: "storage",
    subItems: [
      { name: "Administration", icon: "admin_panel_settings" },
      { name: "Management", icon: "manage_accounts" },
    ],
  },
  {
    name: "Security",
    icon: "security",
    subItems: [
      { name: "Firewall", icon: "private_connectivity" },
      { name: "Warnings", icon: "warning" },
      { name: "Alerts", icon: "notifications" },
      { name: "Blocked", icon: "block" },
    ],
  },
  {
    name: "Profile",
    icon: "person",
    subItems: [
      { name: "Account", icon: "account_circle" },
      { name: "Theme", icon: "palette" },
      { name: "Apps", icon: "apps" },
    ],
  },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <header>
        <h2>
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </h2>
      </header>
      <ul className="blocks">
        {items.map((item) => (
          <Blocks
            key={item.name}
            name={item.name}
            icon={item.icon}
            subItems={item.subItems}
          />
        ))}
      </ul>
    </aside>
  );
};

export default App;
