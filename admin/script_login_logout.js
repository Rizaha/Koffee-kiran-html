
// login

// if (localStorage.getItem('auth') == null) {
//     location.assign('login.html')
// }
async function login() {
    const username = document.getElementById('loguname').value;
    const password = document.getElementById('logpass').value;

    console.log(username + ':' + password)

    auth = btoa(username + ':' + password)

    const res = await fetch('http://127.0.0.1:5000/coffeekiran/admin/login', {
        headers: {
            'Content-Type': 'aplication/json',
            'authorization': 'Basic ' + auth
        }
    });

    tmp = await res.text()
    // console.log(res.status)
    if (res.ok) {
        localStorage.setItem('auth', auth);
        localStorage.setItem('username', username);

        location.assign('home_admin.html')
        return true
    } else {
        localStorage.removeItem('auth');

        alert('authentication error');
        return tmp
    }
};

function logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');

    location.assign('login.html')
}