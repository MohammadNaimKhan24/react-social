import { Bookmarks, Chat, EventNote, Group, Help, RssFeed, School, VideoLibrary, Work } from '@material-ui/icons';
import React from 'react';
import { Users } from '../../dummyData.js';
import Friend from '../friend/Friend';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebarWrapper">
           <ul className="sidebarList">
               <li className="sidebarListItem">
                    <RssFeed  className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
               </li>
               <li className="sidebarListItem">
                    <Chat  className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chats</span>
               </li>
               <li className="sidebarListItem">
                    <VideoLibrary  className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
               </li>
               <li className="sidebarListItem">
                    <Group  className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
               </li>
               <li className="sidebarListItem">
                    <Bookmarks  className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
               </li>
               <li className="sidebarListItem">
                    <Help className="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
               </li>
               <li className="sidebarListItem">
                    <Work  className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
               </li>
               <li className="sidebarListItem">
                    <EventNote  className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
               </li>
               <li className="sidebarListItem">
                    <School className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
               </li>
           </ul>
           <button className="sidebarButton">Show More</button>
           <hr className="sidebarHr" />
           <ul className="sidebarFriendList">
               {Users.map(u => (
                    <Friend key={u.id} user={u}/>
               ))}
           </ul>
       </div>
    </div>
  )
}
