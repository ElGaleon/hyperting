import React, {useEffect, useState} from 'react';
import Users from './components/Users';
import fetchUsers from './logic/fetchUsers';
import getResponseCount from './logic/getResponseCount';
import SearchBar from './components/SearchBar';
import MobileNavBar from './components/MobileNavBar';
import useMediaQuery from './MediaQuery';


function App() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [pageSize, setPageSize] = useState(15);
  const [numPage, setNumPage] = useState(1);
  const [usersTotal, setUsersTotal] = useState(0);
  const isDesktop = useMediaQuery('(min-width:480px)');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handlePageSize = (e) => {
    setPageSize(e.target.value);
  }

  const handleNumPage = (value) => {
    setNumPage(value);
  }

  useEffect(() => {
    fetchUsers({name: text, pageSize: pageSize, numPage: numPage})
    .then(users =>  setUsers(users))

    getResponseCount({name: text, pageSize: pageSize, numPage: numPage})
    .then((total) => setUsersTotal(total))
  }, [users, usersTotal]);

  return (
    <>
    <SearchBar text={text} handleChange={handleChange}/>
    <Users users={users} pageSize={pageSize} numPage={numPage} handleNumPage={handleNumPage} handlePageSize={handlePageSize} usersTotal={usersTotal}/> 
    </>
  );
}

export default App;
