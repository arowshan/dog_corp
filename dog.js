const getUsers = () => {
    const cardsContainer = document.getElementById('cardsContainer');

    fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(async(res) => {
      const data = res['data'];
      const cards = await Promise.all(data.map(async(user) => {
        const name = `${user['first_name']} ${user['last_name']}`;
        const imgUrl = await getDogImage();
        return createCard(name, imgUrl);
      }));
      cardsContainer.innerHTML = cards.join('');
    })
}

const getDogImage = async() => {
  return fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => data['message'])
}

const createCard = (name, imgUrl) => {
    return `<span class="card">
      <img src=${imgUrl} alt="Girl in a jacket" width="200" height="200"/> 
      <h3>${name}</h3>
    </span>`
}


getUsers();
