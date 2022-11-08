import React, { useState, useEffect } from 'react';
import { Flex,  Button, Heading, IconButton, Icon} from '@chakra-ui/react';
import NewChatCard from '../NewChatCard'
import UserCard from '../UserCard';


const MobileOnlineUsers = props => {
  const[onlineUsers, setOnlineUsers] = useState(props.users);

  useEffect(() => {setOnlineUsers(props.users)}, [props.users])
  return (
    <div className="online-users">
    <Flex padding={"24px 24px 0px 24px"}>
      <Heading fontSize={'20px'} color={'gray.600'} fontWeight={'normal'} marginBottom={'0px'}>Online users</Heading>
    </Flex>
    <Flex padding={"16px 24px 16px 24px"} alignItems={'center'} justifyItems={'start'} overflowX={'scroll'} >
      <NewChatCard />
      {onlineUsers && onlineUsers.map((u) => <UserCard user={u} customWidth={'200px'} customFlexGrow={0}/>)}
    </Flex>
    </div>
  );
};
 
export default MobileOnlineUsers; 