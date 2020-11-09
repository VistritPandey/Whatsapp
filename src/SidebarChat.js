import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
import {useState, useEffect} from 'react'

function SidebarChat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()* 5000));
    }, []);
    return (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/$seed.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
