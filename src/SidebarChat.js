import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <h1>Add New Chat</h1>
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
