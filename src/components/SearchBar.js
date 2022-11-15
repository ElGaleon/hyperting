import React from 'react';
import { Flex, Container, Button } from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, CalendarIcon } from '@chakra-ui/icons' 
import {Colors} from '../utils/Colors'
import { FaFilter } from "react-icons/fa";
import SearchBarInput from './SearchBarInput';
import useMediaQuery from '../MediaQuery';

const SearchBar = ({handleChange, text}) => {
    const isDesktop = useMediaQuery('(min-width: 480px)');
  return (
    isDesktop ? (
        // Desktop SearchBar
        <Flex margin="16px 32px 16px 32px" justifyContent="space-between">
      <SearchBarInput text={text} handleChange={handleChange}/>
      <Flex width="599px" justifyContent="flex-end" alignItems="center">
        <Button height="40px" width="107px" colorScheme='white' color="gray.600" border="1px" borderColor="gray.300" borderRadius="13px" rightIcon={<FaFilter color="grey.500"/>}>
          Filter
        </Button>
        <Button height="40px" width="40px"  colorScheme='white' color="gray.600" border="1px" borderColor="gray.300" borderRadius="13px" marginLeft="8px">
        <CalendarIcon color='gray.500' />
        </Button>
      </Flex>
    </Flex>
    ) : (
        // Mobile SearchBar
        <Container width={'100%'} height={'120px'} display={'flex'} alignItems={'flex-end'}  boxShadow={'0px 2px 8px rgba(0, 0, 0, 0.06);'}>
        <Flex justifyContent="space-between" alignItems={'center'} margin={'16px'} width={'fit-content'}>
          <MoonIcon color={Colors.primary} marginRight={'12px'}/>
          <SearchBarInput text={text} handleChange={handleChange} />
          <HamburgerIcon width={'24px'} height={'24px'} marginLeft={'12px'}/>
        </Flex>
      </Container>
    )
  );
};
 
export default SearchBar; 