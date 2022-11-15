import React from 'react';
import { Flex, Heading} from '@chakra-ui/react';
import NewChatCard from './NewChatCard'
import UserCard from './UserCard';
import useMediaQuery from '../MediaQuery';

const OnlineUsers = ({onlineUsers}) => {
 const isDesktop = useMediaQuery('(min-width:480px)');
 
  if(onlineUsers) {
    return(
     
      isDesktop ? 
      (
        // Desktop
        <>
        <Flex margin={"32px 36px 0px 36px"}>
          <Heading fontSize={'20px'} color={'gray.600'} fontWeight={'normal'} marginBottom={'0px'}>Online users</Heading>
        </Flex>
        <Flex padding={"16px 36px 16px 36px"} alignItems={'center'} justifyContent={'flex-start'} overflowX={'scroll'} >
          <NewChatCard />
            {onlineUsers && onlineUsers.map((u) => <UserCard user={u} customWidth={'200px'} customFlexGrow={0}/>)}
        </Flex>
        </>
      ) : 
      (
        // Mobile
        <>
        <Flex padding={"24px 24px 0px 24px"}>
          <Heading fontSize={'20px'} color={'gray.600'} fontWeight={'normal'} marginBottom={'0px'}>Online users</Heading>
        </Flex>
        <Flex padding={"16px 24px 16px 24px"} alignItems={'center'} justifyItems={'start'} overflowX={'scroll'} >
          <NewChatCard />
          {onlineUsers && onlineUsers.map((u) => <UserCard user={u} customWidth={'200px'} customFlexGrow={0}/>)}
        </Flex>
        </>
      ) 
    );
  }
};
 
export default OnlineUsers; 