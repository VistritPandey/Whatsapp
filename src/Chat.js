import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import MoreVert from "@material-ui/icons/MoreVert"
import AttachFile from "@material-ui/icons/AttachFile"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import './Chat.css'

function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Lat seen at.....</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p>
                    <span className="chat__name">Vistrit</span>
                      message goes here
                      <span className="chat__timestamp">
                        { new Date().toUTCString()}
                      </span>
                </p>
            </div>
        </div>
    )
}
//message.timestamp?.toDate()

export default Chat
