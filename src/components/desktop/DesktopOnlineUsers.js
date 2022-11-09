import React, { useState, useEffect } from 'react';
import { Flex, Heading} from '@chakra-ui/react';
import NewChatCard from '../NewChatCard'
import UserCard from '../UserCard';

const DesktopOnlineUsers = props => {
 const[onlineUsers, setOnlineUsers] = useState(props.users);

  useEffect(() => {setOnlineUsers(props.users)}, [props.users])
  return (
    <>
    <Flex margin={"32px 36px 0px 36px"}>
      <Heading fontSize={'20px'} color={'gray.600'} fontWeight={'normal'} marginBottom={'0px'}>Online users</Heading>
    </Flex>
    <Flex padding={"16px 36px 16px 36px"} alignItems={'center'} justifyContent={'flex-start'} overflowX={'scroll'} >
      <NewChatCard />
        {onlineUsers && onlineUsers.map((u) => <UserCard user={u} customWidth={'200px'} customFlexGrow={0}/>)}
    </Flex>
    </>
  );
};
 
export default DesktopOnlineUsers; 