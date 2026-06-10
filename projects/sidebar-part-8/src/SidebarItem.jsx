import React from "react";
import Submenu from "./Submenu";

export const SIDEBAR_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "home-outline",
    type: "page",
    description: "Overview & quick insights",
  },

  {
    id: "analytics",
    label: "Analytics",
    icon: "bar-chart-outline",
    type: "submenu",
    description: "Track performance and metrics",

    children: [
      {
        id: "reports",
        label: "Reports",
        description: "Detailed performance reports",
        icon: "document-text-outline",
        badge: "New",
      },
      {
        id: "stats",
        label: "Statistics",
        description: "View key metrics & trends",
        icon: "stats-chart-outline",
      },
      {
        id: "realtime",
        label: "Real-time",
        description: "Live user activity",
        icon: "pulse-outline",
        badge: "Live",
      },
    ],
  },

  {
    id: "projects",
    label: "Projects",
    icon: "briefcase-outline",
    type: "submenu",
    description: "Manage your projects",

    children: [
      {
        id: "active-projects",
        label: "Active Projects",
        description: "Ongoing work",
        icon: "play-circle-outline",
      },
      {
        id: "archived-projects",
        label: "Archived",
        description: "Completed or paused",
        icon: "archive-outline",
      },
    ],
  },

  {
    id: "settings",
    label: "Settings",
    icon: "settings-outline",
    type: "page",
    description: "Account & preferences",
  },
];

const SidebarItem = ({
  item,
  activeItem,
  isOpen,
  onPageClick,
  onSubmenuToggle,
}) => {
  const isActive = activeItem === item.id;

  return (
    <li>
      <button
        type="button"
        className={`${isActive ? "active" : ""} ${isOpen ? "open" : ""}`}
        onClick={() =>
          item.type === "page" ? onPageClick(item.id) : onSubmenuToggle(item.id)
        }
      >
        <ion-icon name={item.icon}></ion-icon>
        <p>{item.label}</p>

        {item.type === "submenu" && (
          <ion-icon name="chevron-down-outline"></ion-icon>
        )}
      </button>

      {item.type === "submenu" && (
        <Submenu
          isOpen={isOpen}
          activeItem={activeItem}
          items={item.children}
          onPageClick={onPageClick}
        />
      )}
    </li>
  );
};

export default SidebarItem;
