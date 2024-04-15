import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Logo, Settingbtn, Notification } from "./assets/Icon";
import ProfileImage from "./assets/Images/profile.png";
import Loans from "./Components/Loans/Loans";
import SearchInput from "./Components/SearchInput/SearchInput";
import DropdownMenu from "./Components/DropdownMenu/DropdownMenu";
import "./App.scss";
import "./Components/LoanTag/LoanTag.css";
import "./Components/Loans/Loans.css";

function App() {
  const [activeOption, setActiveOption] = useState("Loans");

  const getContent = () => {
    switch (activeOption) {
      case "Dashboard":
        return "This is Dashboard Section";
      case "Transactions":
        return "This is Transactions Section";
      case "Accounts":
        return "This is Accounts Section";
      case "Investment":
        return "This is Investment Section";
      case "Credit":
        return "This is Credit Section";
      case "Loans":
        return <Loans />;
      case "Service":
        return "This is Service Section";
      case "Privileges":
        return "This is Privileges Section";
      case "Setting":
        return "This is Setting Section";
      default:
        return <Loans />;
    }
  };

  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="header-wrap">
            <div className="left-wrap">
              <div className="logo-wrap">
                <div dangerouslySetInnerHTML={{ __html: Logo() }}></div>
              </div>
              <p className="activeHead">{activeOption}</p>
            </div>
            <div className="right-wrap">
              <SearchInput></SearchInput>
              <DropdownMenu
                buttonTitle={
                  <>
                    <div
                      dangerouslySetInnerHTML={{ __html: Settingbtn() }}
                    ></div>
                  </>
                }
                items={[
                  <h2>Settings</h2>,
                  <div className="notification-wrap">
                    <p className="title">Lorem Ipsum</p>
                    <div className="bottom-wrap">
                      <p>Lorem Ipsum</p>
                      <p>1d ago</p>
                    </div>
                  </div>,
                  <div className="notification-wrap">
                    <p className="title">Lorem Ipsum</p>
                    <div className="bottom-wrap">
                      <p>Lorem Ipsum</p>
                      <p>1d ago</p>
                    </div>
                  </div>,
                ]}
              />
              <DropdownMenu
                buttonTitle={
                  <>
                    <div
                      dangerouslySetInnerHTML={{ __html: Notification() }}
                    ></div>
                  </>
                }
                items={[
                  <h2>Notifications</h2>,
                  <div className="notification-wrap">
                    <p className="title">Lorem Ipsum</p>
                    <div className="bottom-wrap">
                      <p>Lorem Ipsum</p>
                      <p>1d ago</p>
                    </div>
                  </div>,
                  <div className="notification-wrap">
                    <p className="title">Lorem Ipsum</p>
                    <div className="bottom-wrap">
                      <p>Lorem Ipsum</p>
                      <p>1d ago</p>
                    </div>
                  </div>,
                  <div className="notification-wrap">
                    <p className="title">Lorem Ipsum</p>
                    <div className="bottom-wrap">
                      <p>Lorem Ipsum</p>
                      <p>1d ago</p>
                    </div>
                  </div>,
                  <div className="notification-wrap">
                    <p className="title">Lorem Ipsum</p>
                    <div className="bottom-wrap">
                      <p>Lorem Ipsum</p>
                      <p>1d ago</p>
                    </div>
                  </div>,
                ]}
                showCloseButton={true}
              />
              <DropdownMenu
                buttonTitle={
                  <>
                    <img
                      src={ProfileImage}
                      alt="Profile"
                      className="profile-image"
                    />
                  </>
                }
                items={[
                  <div className="profile-wrap">
                    <div className="top-wrapper">
                      <div className="left-wrapper">
                        <img
                          src={ProfileImage}
                          alt="Profile"
                          className="profile-image"
                        />
                      </div>
                      <div className="right-wrapper">
                        <h3>Grace John</h3>
                        <p>+91 9827839223 | gracejohn@gmail.com</p>
                      </div>
                    </div>
                    <p className="txt">Menu 1</p>
                    <p className="txt">Menu 1</p>
                    <p className="txt">Menu 1</p>
                    <p className="txt">Menu 1</p>
                  </div>,
                ]}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="dashboard-wrap">
          <Sidebar
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />
          <div className="mainContent">
            <div>{getContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
