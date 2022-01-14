import React from "react";
import './ProfilePage.css'

const ProfilePage =()=>{
    return(
        <div className="profile-page-wrapper">
            <div className="profile-page-container">
                <div className="profile-page-container-left-bar">
                    <div className="profile-page-container-left-bar-profile">
                        <img src="https://www.pngitem.com/pimgs/m/43-434438_admin-person-man-people-customer-user-human-transparent.png" className="profile-page-container-left-bar-profile-image"></img>
                    </div>
                </div>
                <div className="profile-page-container-main-bar"></div>
            </div>
        </div>


    )
}

export default ProfilePage;