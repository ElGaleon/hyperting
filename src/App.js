import React, {useEffect, useState} from 'react';
import MobileApp from './components/mobile/MobileApp';
import DesktopApp from './components/desktop/DesktopApp';
import useMediaQuery from './MediaQuery';
import fetchUsers from './fetchUsers';
import getResponseCount from './getResponseCount';


function App() {
  const isDesktop = useMediaQuery('(min-width: 480px)');
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [pageSize, setPageSize] = useState(15);
  const [numPage, setNumPage] = useState(1);
  const [usersTotal, setUsersTotal] = useState(0)

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
    (isDesktop == true) 
    ? (<DesktopApp text={text} handleChange={handleChange} users={users} pageSize={pageSize} handlePageSize={handlePageSize} numPage={numPage} handleNumPage={handleNumPage} usersTotal={usersTotal}/>) 
    : (<MobileApp text={text} handleChange={handleChange} users={users} usersTotal={usersTotal}/>)
    );
}

export default App;
