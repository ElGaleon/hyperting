const api = 'https://gorest.co.in/public/v2/users';

export async function fetchData () {
    return await fetch(api, {method: 'GET', headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }}).then((response) => response.json())    
            .catch((error) => console.log(error));
}
