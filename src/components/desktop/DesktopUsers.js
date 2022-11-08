import React, { useState,useEffect } from 'react';
import { Flex,  Button, Heading, IconButton, Icon} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons' 
import {Colors} from '../../Colors'
import { MdMoreHoriz } from 'react-icons/md';
import FilterBy from '../FilterBy'
import DesktopOnlineUsers from './DesktopOnlineUsers'
import AddUserBtn from '../AddUserBtn'
import DesktopAllUsers from './DesktopAllUsers';


const DesktopUsers = ({users, handlePageSize, pageSize, handleNumPage, numPage, usersTotal}) => {
  {console.log(users);}
  return (
    <>
      <Flex color='white' padding="18px 32px 16px 32px" justifyContent="space-between">
        <Heading as='h4' color="gray.700" fontSize="32px">Users</Heading>
        <Flex justifyContent={"flex-end"}>
          <AddUserBtn />
          <IconButton aria-label='More options' h='44px' w='44px' icon={<Icon as={MdMoreHoriz} />} color="gray.600" borderRadius="13px" colorScheme="white" boxShadow="md" marginLeft="12px"/>
        </Flex>
      </Flex>
      <FilterBy/>
      <DesktopOnlineUsers users={users.filter((u) => u.status === "active")} />
      <DesktopAllUsers users={users} handlePageSize={handlePageSize} pageSize={pageSize} handleNumPage={handleNumPage} numPage={numPage} usersTotal={usersTotal} />
</>
 );
};
 
export default DesktopUsers; 

