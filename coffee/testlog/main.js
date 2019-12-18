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

function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.message));
    alert("Sign Up")
}
function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.message));
}
function signOut() {
    auth.signOut();
    alert("Sign Out");
}

auth.onAuthStateChanged(function(user) {
    if (user) {
        var email = user.email;
        alert("Active User " + email);

    } else {
        
        alert("No Active User");

    }
});