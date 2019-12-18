

function login() {
    var userEmail = $('#email_field').val();
    var userPass = $('#password_field').val();
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert('Error: ' + errorMessage);
        // ...
    });
};
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        alert('Thành công!');
        $('html').load('index.html');
        $('.login-form').css("display", "none");
    } else {
        $('.login-form').css("display", "block");
    }
});