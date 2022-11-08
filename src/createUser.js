const createUser = async (user) => {
    return await fetch('https://gorest.co.in/public/v2/users', {method: 'POST', headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
      'Authorization' : 'Bearer 2fa8d856d197248a8089d131d0b79485cd6fa946068fd4978c5854935e54198f'
    }, body: JSON.stringify(user)} )
    .then(async (res) => res.json())
    .catch(err => console.log(err))
  };

export default createUser;

