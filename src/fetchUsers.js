const fetchUsers = async ({pageSize = 15, numPage = 1, name = ''}) => {
    return await fetch('https://gorest.co.in/public/v2/users?' + new URLSearchParams({
      name: name, 
      per_page: pageSize, 
      page: numPage
    }), {method: 'GET'} ).then(res => res.json());
    
  };

export default fetchUsers;