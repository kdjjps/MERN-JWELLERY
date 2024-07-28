import React from "react";
import Account from "./Account";
import Bespoke from "./Bespoke";
import DiamondPage from "./ListingComponents/DiamondListings";
import EngagementRingPage from "./ListingComponents/EngagementRings";
import GaneshPendantPage from "./ListingComponents/GaneshaPendantListings";
import GemstonePage from "./ListingComponents/GemstoneListings";
import MensRingPage from "./ListingComponents/MensRingListings";
import KadaPage from "./ListingComponents/KadaListings";
import ChainPage from "./ListingComponents/ChainListings";
import BraceletPage from "./ListingComponents/BraceletListings";
import CreateGemstoneRing from "./CreateJewelry/CreateGemstoneRing";
import CreateGemstonePendant from "./CreateJewelry/CreateGemstonePendant";
import CreateRing from "./CreateJewelry/CreateRing";
import PresetJewelryPage from "./ListingComponents/PresetListings";
import NewEarringPage from "./ListingComponents/NewEarringListings";
import NewPendantPage from "./ListingComponents/NewPendantListings";
// import StudPage from './ListingComponents/StudListings'
import NosePinPage from "./ListingComponents/NosePinListings";
import CreateEarring from "./CreateJewelry/CreateEarring";
import CreatePendant from "./CreateJewelry/CreatePendant";
import GemsRecommendation from "./GemsRecommendation/GemsRecommendation";
import Jewelry from "./Jewelry";
import Palmistry from "./Palmistry";
import Cart from "./Cart/Cart";
import SearchPage from "../Search";
import EducationPage from "./Education";
import AboutUsHomepage from "./AboutUs";
import PoliciesHomepage from "./Policies";
import FAQHomepage from "./FAQ";
import WishList from "./Wishlist";
import Shipping from "./Shipping";
import ThankYouPage from "./ThankYou";
import NoMatch from "./NoMatch";
import UserSpecific from "./UserSpecific";
import ProtectedRoute from "./ProtectedRoute";
import { Switch, Route } from "react-router-dom";

export default function NonHomepage() {
  return (
    <div className="non-homepage">
      <Switch>
        <Route exact path="/bespoke" component={Bespoke} />
        <Route path="/account" component={Account} />
        <Route path="/diamonds" component={DiamondPage} />
        <Route path="/engagement-rings" component={EngagementRingPage} />
        <Route path="/ganesh-pendants" component={GaneshPendantPage} />
        <Route path="/new-pendants" component={NewPendantPage} />
        <Route path="/new-earrings" component={NewEarringPage} />
        <Route path="/nose-pins" component={NosePinPage} />
        <Route path="/gemstones" component={GemstonePage} />
        <Route path="/mens-rings" component={MensRingPage} />
        <Route path="/mens-kada" component={KadaPage} />
        <Route path="/mens-bracelet" component={BraceletPage} />
        <Route path="/chains" component={ChainPage} />
        <Route path="/preset-jewelry" component={PresetJewelryPage} />
        <Route path="/create-your-own-ring" component={CreateRing} />
        <Route path="/create-your-own-stud" component={CreateEarring} />
        <Route path="/create-your-own-necklace" component={CreatePendant} />
        <Route
          path="/create-your-own-gem-ring"
          component={CreateGemstoneRing}
        />
        <Route
          path="/create-your-own-gem-pendant"
          component={CreateGemstonePendant}
        />
        <Route path="/user/:userFname" component={UserSpecific} />
        <Route path="/education" component={EducationPage} />
        <Route path="/about-us" component={AboutUsHomepage} />
        <Route path="/policy" component={PoliciesHomepage} />
        <Route path="/faq" component={FAQHomepage} />
        <Route exact path="/jewelry" component={Jewelry} />
        <Route exact path="/search" component={SearchPage} />
        <Route
          exact
          path="/gems-recommendation"
          component={GemsRecommendation}
        />
        <Route exact path="/indian-astro-company" component={Palmistry} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/wishlist" component={WishList} />
        <Route exact path="/checkout" component={Shipping} />
        <Route exact path="/thankyou" component={ThankYouPage} />
        <Route exact path="/protected" component={ProtectedRoute} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}
