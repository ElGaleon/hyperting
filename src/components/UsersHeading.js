import React from 'react';
import { Flex, Heading, IconButton, Icon, Menu, MenuButton, MenuItem, MenuList, Button} from '@chakra-ui/react';
import { MdMoreHoriz } from 'react-icons/md';
import { ChevronDownIcon} from '@chakra-ui/icons' 
import FilterBy from './FilterBy'
import AddUserBtn from './AddUserBtn'
import useMediaQuery from '../MediaQuery';

const UsersHeading = ({}) => {
    const isDesktop = useMediaQuery('(min-width:480px)');
  return (
    isDesktop ? (
    <>
      <Flex color='white' padding="18px 32px 16px 32px" justifyContent="space-between">
        <Heading as='h4' color="gray.700" fontSize="32px">Users</Heading>
        <Flex justifyContent={"flex-end"}>
          <AddUserBtn />
          <IconButton aria-label='More options' h='44px' w='44px' icon={<Icon as={MdMoreHoriz} />} color="gray.600" borderRadius="13px" colorScheme="white" boxShadow="md" marginLeft="12px"/>
        </Flex>
      </Flex>
      <FilterBy/>   
    </>
    ) : (
    <>
        <Flex color='white' padding="18px 32px 16px 32px" justifyContent="space-between" flexDirection={'column'}>
            <Heading fontWeight={400} color="gray.700" fontSize="24px" marginBottom={'8px'}>Users</Heading>
            <Flex justifyContent={"flex-start"} flexDirection={'row'}>
                <AddUserBtn/>
                <IconButton aria-label='More options' h='44px' w='44px' icon={<Icon as={MdMoreHoriz} />} color="gray.600" borderRadius="13px" colorScheme="white" boxShadow="md" marginLeft="12px"/>
            </Flex>
        </Flex>
        <Flex>
        <Menu>
            <MenuButton as={Button} width={'max-content'} flexGrow={1} rightIcon={<ChevronDownIcon />} margin={'0px 24px 0px 24px'} bgColor={'white'} borderRadius={'12px'} boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04);'}>
                My details
            </MenuButton>
            <MenuList>
                <MenuItem>All</MenuItem>
                <MenuItem>Online</MenuItem>
                <MenuItem>Offline</MenuItem>
                <MenuItem>Archived</MenuItem>
            </MenuList>
        </Menu>
    </Flex>
        </>
    )
 );
};
 
export default UsersHeading; 

