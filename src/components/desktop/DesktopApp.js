import React from 'react';
import DesktopSearchBar from './DesktopSearchBar';
import DesktopUsers from './DesktopUsers';

const DesktopApp = ({text, handleChange, users, handlePageSize, pageSize, handleNumPage, numPage, usersTotal}) => {
  
  return (
    <>
   <DesktopSearchBar handleChange={handleChange} text={text}/>
   <DesktopUsers users={users} handlePageSize={handlePageSize} pageSize={pageSize} handleNumPage={handleNumPage} numPage={numPage} usersTotal={usersTotal}/>
   </>
  )
};
 
export default DesktopApp; 