import React from 'react';
import { Flex,  Text, Heading, Grid, GridItem, Container, Center, Select, Spacer} from '@chakra-ui/react';
import UserCard from '../UserCard';
import ViewBy from '../ViewBy';
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator
} from "@ajna/pagination";
import { Colors } from '../../utils/Colors';


const DesktopAllUsers = ({users, handlePageSize, pageSize, handleNumPage, numPage, usersTotal}) => {
 
 const outerLimit = 2;
 const innerLimit = 2;


  const{
    pages, 
    pagesCount,   
  } = usePagination({
    total: usersTotal, 
    limits: {
      outer: outerLimit, 
      inner: innerLimit
    }, 
    initialState: {
      pageSize: pageSize, 
      currentPage: numPage
    }
  })

  //getResponseCount().then(res => setUsersTotal(res))
  return (
    <>
    <Flex margin={"32px 36px 0px 36px"} justifyContent={'space-between'} >
        <Flex alignItems={'center'}>
      <Heading fontSize={'20px'} color={'gray.600'} fontWeight={'normal'} marginBottom={'0px'}>Users</Heading>
      <Container width={'23px'} height={'20px'} backgroundColor={'gray.200'} borderRadius={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'} marginLeft={'8px'}>
        <Center>
            <Text color={'gray.500'} fontSize={'11px'} >{ usersTotal}</Text>
        </Center>
      </Container>
      </Flex>
      <ViewBy />
    </Flex>
  

    <Grid
        marginBottom={'64px'}
        templateColumns='repeat(12, 1fr)'
        margin={'16px 32px 16px 32px'}
    >
        {users.slice(0, pageSize).map(u => ( (users.indexOf(u) < 3) ? <GridItem colSpan={4} children={<UserCard user={u} settings={true} customWidth={'auto'} customFlexGrow={1}/>}/> :  <GridItem colSpan={3} children={<UserCard user={u} settings={true} customWidth={'auto'} customFlexGrow={1}/>}/> ))}
    </Grid>
    
    <Spacer/>
    <Flex flexDirection={'row'} margin={'16px 32px 32px 32px'} justifyContent={'space-between'}>

    <Pagination
      pagesCount={pagesCount}
      currentPage={numPage}
      onPageChange={handleNumPage}>
        <PaginationContainer w='40px' h={'40px'}>
          <PaginationPrevious 
                        w={'40px'}
                        h={'40px'}
                      _hover={{bg: 'gray.600'}} 
                      backgroundColor={'white'}
                      color={'gray.500'} 
                      boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04);'}
                          onClick={() =>
                            handleNumPage(numPage-1)
                          }
        >
          <Text>&#60;</Text>
        </PaginationPrevious>
        <PaginationPageGroup
              isInline
              align="center"
              separator={
                <PaginationSeparator
                backgroundColor={'white'}
                  fontSize="sm"
                  w='40px'
                  jumpSize={11}
                />
              }
            >
              {pages.map((page) => (
                <PaginationPage
                  w='40px'
                  backgroundColor={'white'}
                  key={`pagination_page_${page}`}
                  color={'gray.500'}
                  page={page}
                  onClick={() => {  
                    handleNumPage(numPage)
                  }
                  }
                  fontSize="sm"
                  _hover={{
                    bg: "#F5F5FF",
                    color: Colors.primary,
                  }}
                  _current={{
                    bg: "#F5F5FF",
                    color: Colors.primary,
                    fontSize: "sm",
                    w: 7
                  }}
                />
              ))}

            </PaginationPageGroup>
            <PaginationNext
            w={'40px'}
            h={'40px'}
          _hover={{bg: 'gray.600'}} 
          backgroundColor={'white'}
          color={'gray.500'} 
          boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04);'}
              onClick={() => {
                handleNumPage(numPage+1)
              }
              }
            >
              <Text>&#62;</Text>
            </PaginationNext>
        </PaginationContainer>

      </Pagination>

      
    <Select ml={3} width={'80px'} backgroundColor={'white'} onChange={handlePageSize} boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04);'} borderRadius={'12px'}>
            <option value="15">15</option>
            <option value="27">27</option>
            <option value="43">43</option>
    </Select>
    </Flex>


    </>
  );
  }
export default DesktopAllUsers;
