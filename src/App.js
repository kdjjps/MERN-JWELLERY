import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TopMessageBanner from "./components/TopMessageBanner";
import CurrencyChanger from "./components/Content/CurrencyChanger/CurrencyChanger";
import Content from "./components/Content/Content";
import QueryForm from "./components/QueryForm/QueryForm";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import Help from "./components/Help/Help";
import HelpForm from "./components/HelpForm/index.js";
import { PriceContextProvider } from "./contexts/PriceContext";
import { UserContextProvider } from "./contexts/UserContext.js";
import { Provider } from "react-redux";
import { store } from "./store";
import Flash from "./components/Flash";
import { initFacebookSdk } from "./helper/init-fb-sdk";
import { initGoogleSdk } from "./helper/init-google-sdk";

function App() {
  const [cookies] = useCookies();
  const [slideStatus, setSlideStatus] = useState(false);
  const [stickyStatus] = useState(false);
  const [helpFormStatus, setHelpFormStatus] = useState(false);

  const onHamburgerClick = () => {
    if (slideStatus === false) {
      setSlideStatus(true);
      document
        .getElementById("root")
        .setAttribute(
          "style",
          `position: fixed; top: ${window.scrollY}; left: 0; right: 0;`
        );
    } else {
      setSlideStatus(false);
      document.getElementById("root").setAttribute("style", "");
      window.scrollTo(0, window.scrollY);
    }
  };

  // useEffect(() => {
  //   initFacebookSdk()
  //     .then(() => {
  //       return initGoogleSdk();
  //     })
  //     .then(() => {
  //       return console.log("Social login script loading done!");
  //     });
  // }, []);

  return (
    <Provider store={store}>
      <PriceContextProvider>
        <UserContextProvider>
          <Router>
            <Switch>
              <div>
                <CurrencyChanger />
                <TopMessageBanner />
                <Header
                  currencyWindowStatus={cookies.currencyType}
                  onHamburgerClick={onHamburgerClick}
                  stickyStatus={stickyStatus}
                />
                <Sidebar
                  slideStatus={slideStatus}
                  onHamburgerClick={onHamburgerClick}
                />
                <div style={{ minHeight: "500px" }}>
                  <Route path={"/"} component={Content} />
                </div>
                <QueryForm />
                <Flash />
                <Help
                  setHelpFormStatus={setHelpFormStatus}
                  helpFormStatus={helpFormStatus}
                />
                <HelpForm
                  helpFormStatus={helpFormStatus}
                  setHelpFormStatus={setHelpFormStatus}
                />
                <Footer />
              </div>
            </Switch>
          </Router>
        </UserContextProvider>
      </PriceContextProvider>
    </Provider>
  );
}

export default App;
