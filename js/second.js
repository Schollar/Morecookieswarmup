var master_password = 'kong'
var master_username = 'king'
var inject = document.getElementById('inject');
var user_info_json = Cookies.get('user_info');
function get_info() {

    var user_info = JSON.parse(user_info_json);

    if (master_username === user_info.name && master_password === user_info.password) {
        inject.innerText = "Congrats!!"
    } else {
        inject.innerText = "Sorry!"
    }
}

get_info();