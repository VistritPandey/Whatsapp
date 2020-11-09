import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
import {useState, useEffect} from 'react'

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()* 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter a name for chat room");

        if(roomName) {

        }
    }

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add a Group</h2>
        </div>
    )
}

export default SidebarChat
