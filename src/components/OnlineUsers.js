import React, { useState, useEffect } from 'react';
import { Flex,  Button, Heading, IconButton, Icon} from '@chakra-ui/react';
import NewChatCard from './NewChatCard'
import UserCard from './UserCard';
import useMediaQuery from '../MediaQuery';
import DesktopOnlineUsers from './desktop/DesktopOnlineUsers';
import MobileOnlineUsers from './mobile/MobileOnlineUsers';


const OnlineUsers = props => {
 const[onlineUsers, setOnlineUsers] = useState(props.users);
 const isDesktop = useMediaQuery('(min-width:480px)');
  if(onlineUsers) {
    return(
      isDesktop ? <DesktopOnlineUsers users={onlineUsers}/> : <MobileOnlineUsers users={onlineUsers} />
    );
  }
};
 
export default OnlineUsers; 