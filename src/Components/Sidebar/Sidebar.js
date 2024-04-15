import React from "react";
import "./Sidebar.scss";
import {
  Dashboard,
  Transactions,
  Accounts,
  Investment,
  Credit,
  Loans,
  Service,
  Privileges,
  Setting,
} from "../../assets/Icon";

const Sidebar = ({ activeOption, setActiveOption }) => {
  const options = [
    { text: "Dashboard", icon: Dashboard(), key: "Dashboard" },
    { text: "Transactions", icon: Transactions(), key: "Transactions" },
    { text: "Accounts", icon: Accounts(), key: "Accounts" },
    { text: "Investments", icon: Investment(), key: "Investment" },
    { text: "Credit Cards", icon: Credit(), key: "Credit" },
    { text: "Loans", icon: Loans(), key: "Loans" },
    { text: "Services", icon: Service(), key: "Service" },
    { text: "My Privileges", icon: Privileges(), key: "Privileges" },
    { text: "Setting", icon: Setting(), key: "Setting" },
  ];

  const handleOptionClick = (option) => {
    setActiveOption(option.key);
  };

  return (
    <div className="sidebar">
      {options.map((option, index) => (
        <div
          key={index}
          className={`sidebarOption ${
            activeOption === option.key ? "active" : ""
          }`}
          onClick={() => handleOptionClick(option)}
        >
          <div dangerouslySetInnerHTML={{ __html: option.icon }}></div>
          <p>{option.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
