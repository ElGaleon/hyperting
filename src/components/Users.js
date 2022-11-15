import React from 'react';
import OnlineUsers from './OnlineUsers';
import AllUsers from './AllUsers';
import UsersHeading from './UsersHeading';

const Users = ({users, pageSize, numPage, handlePageSize, handleNumPage, usersTotal}) => {

  return (
    <>
    <UsersHeading />
     <OnlineUsers onlineUsers={users.filter(u => u.status='active')}/>
     <AllUsers users={users} pageSize={pageSize} numPage={numPage} handleNumPage={handleNumPage} handlePageSize={handlePageSize} usersTotal={usersTotal}/>
    </>
  );
};
 
export default Users; 