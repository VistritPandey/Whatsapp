import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
