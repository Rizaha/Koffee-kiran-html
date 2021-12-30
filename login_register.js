// login section start 

function user() {
    const kakak = localStorage.getItem('username')
    return kakak
}

document.getElementById('useer').innerHTML = user()

async function login() {
    const username = document.getElementById('loguname').value;
    const password = document.getElementById('logpass').value;

    console.log(username + ':' + password)

    auth = btoa(username + ':' + password)

    const res = await fetch('http://127.0.0.1:5000/coffeekiran/login', {
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

        document.getElementById('login').style.display = 'none';

        document.getElementById('navuser').style.display = 'block';
        document.getElementById('navmasuk').style.display = 'none';
        location.reload();
        return true
        
    } else {
        localStorage.removeItem('auth');
        
        alert('username atau password salah');
        return tmp
    }
};


function logout() {
    document.getElementById('navmasuk').style.display = 'block';
    document.getElementById('navuser').style.display = 'none';
    localStorage.removeItem('auth');
    localStorage.removeItem('username');

    location.assign('home.html')
}

document.getElementById("masuk").addEventListener("click", login);
document.getElementById("logout").addEventListener("click", logout);

if (localStorage.getItem('auth') != null) {
    document.getElementById('navuser').style.display = 'block';
    document.getElementById('navmasuk').style.display = 'none';
}


// login section end



// regist section start

function clsdaf() {
    document.getElementById('daftar').style.display = 'none'
    document.getElementById('edituname').style.display = 'none'
}

function validasi() {
    const username =
        document.forms["RegistForm"]["uname"];
    const mail =
        document.forms["RegistForm"]["mail"];
    const password =
        document.forms["RegistForm"]["pass"];

    if (username.value == "") {
        alert("Please enter your username.");
        username.focus();
        return false;
    }

    if (mail.value == "") {
        alert("Please enter a valid e-mail address");
        mail.focus();
        return false;
    }

    if (password.value == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    return true;
}
async function regist() {
    if (validasi() == true) {
        const username = document.getElementById('rgstuname').value;
        const password = document.getElementById('rgstpass').value;
        const mail = document.getElementById('rgstmail').value;

        const auth = btoa(username + ':' + password)

        console.log(username, password, mail);

        const res = await fetch('http://127.0.0.1:5000/coffeekiran/signup', {
            method: 'POST',
            body: JSON.stringify({
                'username': username,
                'email': mail,
                'password': password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.statusText);
        
        const json = await res.json();

        document.getElementById('daftar').style.display = 'none';

        localStorage.setItem('auth', auth);
        localStorage.setItem('username', username);

        alert('Akun Sudah Dibuat !, Yuk isi Profile dulu..');

        location.assign('profil.html');

        return json
    }
}
// regist section end