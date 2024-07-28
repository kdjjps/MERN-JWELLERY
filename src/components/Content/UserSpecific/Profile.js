import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

export default function Profile() {
  const {url} = useRouteMatch()

  return (
    <div id="profile">
        <div className="banner">
            <div className="icon">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShl0ZZFY6KEoibJDaVnDqkGaJ-9cb63QHYS6emT9TLk_uPCPyx" alt='details-icon' />
            </div>
            <div>
                <h2>
                    Complete your profile & get rewards!
                </h2>
                <p>
                    Don't miss out on EXTRA discounts! Update your profile details now and get 250 instant xCLusive Points, and an Extra 5%* off during your Birthday and Anniversary months! *TCA.
                </p>
            </div>
        </div>
        <div className="details-holder">
            <div className="holder-top-box">
                <div>
                    Your Details
                </div>
                <Link to={`${url}/edit`}>
                   Edit Profile
                </Link>
            </div>
            <div className="details">
                <div className="detail-row">
                    <div className="detail-title">
                        Name
                    </div>
                    <div className="detail-data">
                        Ujjwal
                    </div>
                </div>
                <div className="detail-row">
                    <div className="detail-title">
                        Email
                    </div>
                    <div className="detail-data">
                        ujjwalsden@gmail.com
                    </div>
                </div>
                <div className="detail-row">
                    <div className="detail-title">
                        Mobile No.
                    </div>
                    <div className="detail-data">
                        -
                    </div>
                </div>
                <div className="detail-row">
                    <div className="detail-title">
                        Pincode
                    </div>
                    <div className="detail-data">
                        -
                    </div>
                </div>
                <div className="detail-row">
                    <div className="detail-title">
                        Birthday
                    </div>
                    <div className="detail-data">
                        -
                    </div>
                </div>
                <div className="detail-row">
                    <div className="detail-title">
                        Anniversary
                    </div>
                    <div className="detail-data">
                        -
                    </div>
                </div>
                <div className="detail-row">
                    <div className="detail-title">
                        Occupation
                    </div>
                    <div className="detail-data">
                        -
                    </div>
                </div>
                <div className="detail-row">
                    <div className="detail-title">
                        Spouse Birthday
                    </div>
                    <div className="detail-data">
                        -
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
