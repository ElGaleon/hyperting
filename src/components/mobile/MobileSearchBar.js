import React from 'react';
import { Flex, Container } from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon } from '@chakra-ui/icons' 
import { Colors } from '../../utils/Colors';
import SearchBar from '../SearchBar';

const MobileSearchBar = ({handleChange, text}) => {
  return (
  <Container width={'100%'} height={'120px'} display={'flex'} alignItems={'flex-end'}  boxShadow={'0px 2px 8px rgba(0, 0, 0, 0.06);'}>
    <Flex justifyContent="space-between" alignItems={'center'} margin={'16px'} width={'fit-content'}>
      <MoonIcon color={Colors.primary} marginRight={'12px'}/>
      <SearchBar text={text} handleChange={handleChange} />
      <HamburgerIcon width={'24px'} height={'24px'} marginLeft={'12px'}/>
    </Flex>
  </Container>
  );
};
 
export default MobileSearchBar; 