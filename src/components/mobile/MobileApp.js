import React, { useState } from 'react';
import MobileSearchBar from './MobileSearchBar';
import MobileUsers from './MobileUsers';

const MobileApp = ({handleChange, text, users, usersTotal}) => {
  return (
    <>
    <MobileSearchBar handleChange={handleChange} text={text}/>
    <MobileUsers users={users} usersTotal={usersTotal} />
    </>
    );
};
 
export default MobileApp; 