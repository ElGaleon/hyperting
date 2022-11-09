import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import {ChatIcon} from '@chakra-ui/icons' 
import { Flex,  Container, Center, Text, Avatar, AvatarBadge, Box} from '@chakra-ui/react';

const UserCard = (props) => {
    const[user] = useState(props.user);
    const[settings] = useState(props.settings);
    const[customWidth] = useState(props.customWidth);
    const[customFlexGrow] = useState(props.customFlexGrow);
  return (
    <>
    <Box width={customWidth} flexGrow={customFlexGrow} flexShrink={0} height={'136px'} borderRadius={'16px'} boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04);'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={'8px'} padding={'16px'} >
       <Flex flexDirection={'column'} marginLeft={'16px'} marginTop={'16px'} width={'100%'}>
            <Flex flexDirection={'row'} justifyContent={'left'} alignItems={'center'}>
                <Avatar zIndex={0} width={'44px'} height={'44px'} marginRight={'16px'}>
                    <AvatarBadge boxSize='1.25em' bg={user.status === 'active' ? 'green.500' : 'gray.300'} />
                </Avatar>        
                <Container margin={'0px'} width={'32px'} height={'32px'} backgroundColor={'gray.100'} borderRadius={'13px'} justifyContent={'center'} display={settings===true ? "flex" : "none"}>
                    <Center>
                        <MdMoreHoriz color={'gray.600'} />
                    </Center>
                </Container>
                <Container marginLeft={'8px'} width={'32px'} height={'32px'} backgroundColor={'gray.100'} borderRadius={'13px'} justifyContent={'center'} display={settings===true ? "flex" : "none"}>
                    <Center>
                        <ChatIcon color={'gray.600'} />
                    </Center>
                </Container>
            </Flex>
            <Text color={'gray.600'} fontSize={'16px'} width={'100%'} align={'left'} fontWeight={'bold'}>{user && user.name}</Text>
            <Text color={'gray.500'} fontSize={'16px'} width={'100%'} align={'left'} fontWeight={'normal'}>{user && user.gender}</Text>
        </Flex>
   </Box>
   </>
 );
};
 
export default UserCard; 