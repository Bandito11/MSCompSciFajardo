function verify() {
    var htmlControls = HTMLControls();
    if (htmlControls.username.value && htmlControls.password.value) {
        var headers = {
            'username': htmlControls.username.value,
            'password': htmlControls.password.value,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        var init = {
            headers: headers,
            method: 'POST'
        };
        fetch('/authenticate', init)
            .then(function (response) { return response.json(); })
            .then(function (res) {
            if (res.success) {
                sessionStorage.setItem('token', res.token);
                goToPage2();
            }
        });
    }
    else {
        alert('Hay campos que estan vacios.');
    }
}
function goToPage2() {
    var headers = {
        'x-access-token': sessionStorage.getItem('token')
    };
    var init = {
        headers: headers
    };
    fetch('/page2', init)
        .then(function (res) { return res.text(); })
        .then(function (res) {
        window.location.assign("" + window.location.hostname + res);
    });
}
function HTMLControls() {
    var username = document.getElementById('user');
    var password = document.getElementById('password');
    var submit = document.getElementById('submit');
    var user = document.getElementById('existe');
    return {
        username: username,
        password: password,
        submit: submit,
        user: user
    };
}
