// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6r1hF8uK9ipnHb-5Uzm5-hAGCFoITfeY",
    authDomain: "form-1ebd8.firebaseapp.com",
    databaseURL: "https://form-1ebd8.firebaseio.com",
    projectId: "form-1ebd8",
    storageBucket: "form-1ebd8.appspot.com",
    messagingSenderId: "210067598066",
    appId: "1:210067598066:web:7d0844496d37acc5bebe6b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signIn() {
    var userEmail = $('#email_field').val();
    var userPass = $('#password_field').val();
    
    const promise = auth.signInWithEmailAndPassword(userEmail, userPass);
    promise.catch(e => alert(e.message));
};

function signOut() {
    auth.signOut();
    $('html').load('index.html');
};

auth.onAuthStateChanged(function(user) {
    if (user) {
        $('html').load('index2.html');
        var email = user.email;
        alert("Active User " + email);
    } else {
        alert("No Active User");
    }
});