// Необходимо получить список всех пользователей с помощью бесплатного
// API(https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
//     Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
//     ДОПОЛНИТЕЛЬНАЯ НЕОБЯЗАТЕЛЬНАЯ ЧАСТЬ -
// Пользователь должен иметь возможность удалить любого пользователя из списка.
//     При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

function fetchUserFromAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(respose => respose.json())
            .then(data => {
                localStorage.setItem('users', JSON.stringify(data));
                displayUser(data);
            })
            .catch(error => console.log('Error fetching users:', error));
    
}

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = user.name;
        userList.appendChild(userItem);
    });
}

function deleteUser(userId) {
    let users = JSON.parse(localStorage.getItem('users'));
    users = users.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers(users);
}