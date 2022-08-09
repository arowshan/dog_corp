const getUsers = () => {
    const cardsContainer = document.getElementById('cardsContainer');

    fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(res => {
      const data = res['data'];
      const cards = data.map(user => {
        const name = `${user['first_name']} ${user['last_name']}`;
        const imgUrl = user['avatar'];
        return createCard(name, imgUrl)
      });
      

      cardsContainer.innerHTML = cards.join('');
    })
}

const createCard = (name, imgUrl) => {
    return `<span class="card">
      <img src=${imgUrl} alt="Girl in a jacket" width="200" height="200"/> 
      <h3>${name}</h3>
    </span>`
}


getUsers();
