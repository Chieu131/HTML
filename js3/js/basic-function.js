var msg = 'sign up to receive our newsletter for 10% off!';

function updateMessage(){
    var el = document.getElementById('message');
    el.textContent = msg;
}

function updateMessage2(){
    var el = document.getElementById('message');
    el.textContent = iMess;
}

updateMessage2('abc');