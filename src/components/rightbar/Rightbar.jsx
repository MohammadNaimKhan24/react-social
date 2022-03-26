import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="birthday" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mohammad Naim</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="ad" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue">Dhaka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From : </span>
            <span className="rightbarInfoValue">Dhaka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship : </span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends </h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="/assets/person/naim.jpg" alt="follow" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Mohammad Naim</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/person/4.jpeg" alt="follow" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Alex Maria</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/person/Ayesha Akter.jpg" alt="follow" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Ayesha Akter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/person/Anjuman Ara.jpg" alt="follow" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Anjuman Ara</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/person/1.jpeg" alt="follow" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/person/2.jpeg" alt="follow" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Doe</span>
            </div>
        </div>
        {/* extra one item for additional information */}
        <img src="/assets/ad.png" alt="ad" className="rightbarAd" />
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar/>}
      </div>
    </div>
  );
}
