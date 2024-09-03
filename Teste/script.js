
let users = [];
let currentUserId = null;

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (currentUserId === null) {
        // CREATE
        const newUser = {
            id: users.length + 1,
            name,
            age,
            phone,
            address
        };
        users.push(newUser);
    } else {
        // UPDATE
        const user = users.find(u => u.id === currentUserId);
        user.name = name;
        user.age = age;
        user.phone = phone;
        user.address = address;
    }

    renderUsers();
    clearForm();
});

function renderUsers() {
    const userTableBody = document.querySelector('#userTable tbody');
    userTableBody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.phone}</td>
            <td>${user.address}</td>
            <td class="actions">
                <button onclick="editUser(${user.id})">Editar</button>
                <button onclick="deleteUser(${user.id})">Excluir</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('userId').value = '';
    currentUserId = null;
}

function editUser(id) {
    const user = users.find(u => u.id === id);
    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    document.getElementById('phone').value = user.phone;
    document.getElementById('address').value = user.address;
    document.getElementById('userId').value = user.id;
    currentUserId = id;
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderUsers();
}