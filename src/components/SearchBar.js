import React, {useEffect, useRef} from 'react';
import {Stack, InputGroup, Input, InputLeftElement, InputRightElement, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons' 
import useMediaQuery from '../MediaQuery';


const SearchBar = ({text, handleChange}) => {
  const isDesktop = useMediaQuery('(min-width: 480px)');
  const ref = useRef(null)
  
  // Listener for CTRL+F/CMD+F - doesn't work
  window.addEventListener('keydown', function (e) {
    console.log(e.key === 'Meta' && e.key == 'f');
    if (e.key === 'Meta' && e.key == 'f') {
      e.preventDefault();
      ref.current.focus();
      }
  })


  const handleSearch = () => {
    ref.current.focus();
  }

  return (
    <Stack width={isDesktop ? "599px" : "auto"}>
      <InputGroup>
        <InputLeftElement pointerEvents='none' children={<SearchIcon color='gray.500' />}/>
        <Input type='text' ref={ref} placeholder='Search...' color="gray.600" value={text} onChange={handleChange} boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04);'} borderRadius={'12px'}/>
        {isDesktop ? (
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' color="gray.600" onClick={handleSearch} >⌘F</Button>
          </InputRightElement>) : ''}
      </InputGroup>
    </Stack>
    );
};
 
export default SearchBar; 