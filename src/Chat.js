import { Avatar, IconButton } from '@material-ui/core'
import {React, useState, useEffect} from 'react'
import MoreVert from "@material-ui/icons/MoreVert"
import AttachFile from "@material-ui/icons/AttachFile"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import './Chat.css'
import { useParams } from "react-router-dom"

function Chat() {

    const {roomId } = useParams();
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()* 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput("");
    }

    const [input, setInput] = useState("");
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
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
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">Vistrit</span>
                      message goes here
                      <span className="chat__timestamp">
                        { new Date().toUTCString()}
                      </span>
                </p>
                
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button onClick={sendMessage}
                        type="submit">
                    Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}


export default Chat
