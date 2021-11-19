var master_username = "king";
var master_password = "kong";


function get_values() {
    var user_input = document.getElementById('name');
    var user_name = user_input.value;

    var user_password_input = document.getElementById('password');
    var user_password = user_password_input.value;

    var login_status = document.getElementById('status_message');
    var user_info =
    {
        name: user_name,
        password: user_password
    };
    var user_info_string = JSON.stringify(user_info);
    Cookies.set('user_info', user_info_string);

    // if (master_username === user_name && master_password === user_password) {
    //     login_status.innerText = "Login Success";
    // } else {
    //     login_status.innerText = "Login Failed";
    // }
    window.location.assign('second_page.html')
}

var login_button = document.getElementById('login_button')
login_button.addEventListener('click', get_values);