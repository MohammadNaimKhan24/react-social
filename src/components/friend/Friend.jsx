import React from 'react';
import './friend.css';

export default function Friend({user}) {
  return (
    <div>
         <li className="sidebarFriend">
                     <img src={user.profilePicture} className="sidebarFriendImg" alt="friend"/>
                     <span className="sidebarFriendName">
                          {user.username}
                     </span>
                </li>
    </div>
  )
}
