import React, { useState, useEffect } from 'react';
import { Flex,  Text, Heading, Grid, GridItem, Container, Center} from '@chakra-ui/react';
import {ArrowDownIcon} from '@chakra-ui/icons' 
import UserCard from '../UserCard';
import ViewBy from '../ViewBy';


const MobileAllUsers = ({users, usersTotal}) => {

  return (
    <>
    <Flex margin={"32px 36px 0px 36px"} justifyContent={'space-between'} >
        <Flex alignItems={'center'}>
      <Heading fontSize={'20px'} color={'gray.600'} fontWeight={'normal'} marginBottom={'0px'}>Users</Heading>
      <Container width={'23px'} height={'20px'} backgroundColor={'gray.200'} borderRadius={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'} marginLeft={'8px'}>
        <Center>
            <Text color={'gray.500'} fontSize={'11px'} >{usersTotal}</Text>
        </Center>
      </Container>
      </Flex>
      <ViewBy />
    </Flex>
    <Flex
      flexDirection={'column'}
        margin={'16px 24px 0px 24px'}
        justifyContent={'center'}
    >
        {users && users.map(u => ( (users.indexOf(u) < 3) ? <GridItem colSpan={4} children={<UserCard user={u} settings={true} customWidth={'auto'} customFlexGrow={1}/>}/> :  <GridItem colSpan={3} children={<UserCard user={u} settings={true} customWidth={'auto'} customFlexGrow={1}/>}/> ))}
        </Flex>
        <Center>
          
          </Center>
        <Flex flexDirection={'column'} justifyContent={'center'}  margin={'40px auto 150px auto'} >
        <Container bgColor={'gray.200'} borderRadius={'100px'} width={'40px'} height={'40px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <ArrowDownIcon color={'gray.500'} width={'24px'} height={'32px'}></ArrowDownIcon>
          </Container>
          <Text color={'gray-600'} textAlign={'center'} margin={'8px auto 0px auto'}>Load more</Text>
        </Flex>
    
    </>
  );
  }
export default MobileAllUsers;
