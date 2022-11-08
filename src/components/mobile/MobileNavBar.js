import React, { useState, useEffect } from 'react';
import { Avatar,  AvatarBadge, Grid, GridItem, Container, Center, color} from '@chakra-ui/react';
import {CalendarIcon} from '@chakra-ui/icons' 
import UserCard from '../UserCard';
import ViewBy from '../ViewBy';
import { MdFolderOpen, MdDashboard, MdPeople } from 'react-icons/md'
import { Colors } from '../../Colors';


const MobileNavBar = () => {
 
  
  return (
    <Container position={'fixed'} bottom={'0px'} height={'83px'} bgColor={'white'} boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04);'} zIndex={2}>
        <Grid templateColumns='repeat(5, 1fr)' gap={6} height={'49px'} marginTop={'8px'}>
            <GridItem w='100%' display={'flex'} alignItems={'center'} justifyContent={'center'} children={<MdDashboard size={'32px'} style={{color: Colors['gray.400']}}/>}/> 
            <GridItem w='100%' display={'flex'} alignItems={'center'} justifyContent={'center'} children={<MdFolderOpen size={'32px'} style={{color: Colors['gray.400']}}/>}/>
            <GridItem w='100%' h='10' display={'flex'} alignItems={'center'} justifyContent={'center'} children={<CalendarIcon color={Colors['gray.400']} w={'24px'} h={'24px'}/>} />
            <GridItem w='100%' h='10' display={'flex'} alignItems={'center'} justifyContent={'center'} children={<MdPeople style={{color: Colors.primary}} size={'32px'} />} />
            <GridItem w='100%' h='10'  display={'flex'} alignItems={'center'} justifyContent={'center'} children={            
                <Avatar zIndex={0} width={'32px'} height={'32px'} bgColor={Colors['gray.400']}>
                     <AvatarBadge boxSize='1.25em' bg='green.500' />
            </Avatar>} />
            
            </Grid>
    </Container>
  );
  }
export default MobileNavBar;
