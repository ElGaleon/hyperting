import React from 'react';
import {Button } from '@chakra-ui/react';
import { CalendarIcon, } from '@chakra-ui/icons' 
import { FaFilter } from "react-icons/fa";
import SearchBar from '../SearchBar';

const DesktopSearchBar = ({handleChange, text}) => {
  return (
    <Flex margin="16px 32px 16px 32px" justifyContent="space-between">
      <SearchBar text={text} handleChange={handleChange}/>
      <Flex width="599px" justifyContent="flex-end" alignItems="center">
        <Button height="40px" width="107px" colorScheme='white' color="gray.600" border="1px" borderColor="gray.300" borderRadius="13px" rightIcon={<FaFilter color="grey.500"/>}>
          Filter
        </Button>
        <Button height="40px" width="40px"  colorScheme='white' color="gray.600" border="1px" borderColor="gray.300" borderRadius="13px" marginLeft="8px">
        <CalendarIcon color='gray.500' />
        </Button>
      </Flex>
    </Flex>

  );
};
 
export default DesktopSearchBar; 