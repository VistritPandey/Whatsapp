import React from 'react'
import './Sidebar.css'
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import { Avatar, IconButton } from '@material-ui/core'
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                <IconButton>
                    <AddCircleOutlineSharpIcon />
                </IconButton>
                
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search a Chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
