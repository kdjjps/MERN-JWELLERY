import React from "react";
import RegularDiamondListings from './RegularDiamondListings'
import CustomDiamondListings from './CustomDiamondListings'

export default function DiamondListings(props) {

  return (
    <div>
      {
        window.location.pathname === "/diamonds"

        ?

        <RegularDiamondListings
        {...props}
        />

        :

        <CustomDiamondListings
        {...props}
        />
      }
    </div>
  );
}