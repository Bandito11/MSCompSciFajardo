function verify() {
    const htmlControls = HTMLControls();
    if (htmlControls.username.value && htmlControls.password.value) {
        const headers = {
            'username': htmlControls.username.value,
            'password': htmlControls.password.value,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const init = {
            headers: headers,
            method: 'POST'
        };
        fetch('/authenticate', init)
            .then(response => response.json())
            .then(res => {
                if(res.success){
                    sessionStorage.setItem('token', res.token);
                    goToPage2();
                }
            });
    }else{
        alert('Hay campos que estan vacios.')
    }

}

function goToPage2(){
    const headers = {
        'x-access-token': sessionStorage.getItem('token')
    }
    const init = {
        headers: headers
    }
    fetch('/page2', init)
    .then(res=>res.text())
    .then(res=>{
        window.location.assign(`${window.location.hostname}${res}`);
    }
    )
}

function HTMLControls() {
    const username = <HTMLInputElement>document.getElementById('user');
    const password = <HTMLInputElement>document.getElementById('password');
    const submit = <HTMLButtonElement>document.getElementById('submit');
    const user = <HTMLParagraphElement> document.getElementById('existe');
    return {
        username: username,
        password: password,
        submit: submit,
        user: user
    }
}