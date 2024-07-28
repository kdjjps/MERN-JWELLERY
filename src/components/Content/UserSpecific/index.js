import React, { useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AccountSettings from "./AccountSettings";
import Orders from "./Orders";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import Wishlist from "./Wishlist";
import Offers from "./Offers";
import UserSpecificBox from "./style";
import { useCookies } from "react-cookie";
import { UserContext } from "../../../contexts/UserContext";
import Loader from "../Loader/Loader";

export default function UserSpecific() {
  const { path } = useRouteMatch();
  const [cookies, setCookie] = useCookies();
  const { isUserAuthorized, isUserContextLoading, isUserSignedIn } = useContext(UserContext);

  return (
    
        cookies.isSignedIn

        ?

        <div>
      {isUserContextLoading ? (
        <Loader />
      ) : (
        <div>
          {isUserAuthorized ? (
            <UserSpecificBox>
              <section className="user-specific-content">
                <Switch>
                  <Route
                    exact
                    path={`${path}`}
                    render={(props) => <AccountSettings />}
                  />
                  <Route
                    exact
                    path={`${path}/orders`}
                    render={(props) => <Orders />}
                  />
                  <Route
                    exact
                    path={`${path}/wishlist`}
                    render={(props) => <Wishlist />}
                  />
                  <Route
                    exact
                    path={`${path}/profile`}
                    render={(props) => <Profile />}
                  />
                  <Route
                    exact
                    path={`${path}/profile/edit`}
                    render={(props) => <ProfileEdit />}
                  />
                  <Route
                    exact
                    path={`${path}/offers`}
                    render={(props) => <Offers />}
                  />
                </Switch>
              </section>
            </UserSpecificBox>
          ) : (
            <div className="not-authorized-displayer">
              Sorry, you are not authorized to view this page!
            </div>
          )}
        </div>
      )}
    </div>

        :

        <div style={{height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 'bold', color: 'rgb(30,46,76)'}}>
            Oops, you are not signed in!
        </div>
    
  );
}
