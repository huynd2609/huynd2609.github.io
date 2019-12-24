//TODO: PAGE LOGIN
	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyA6r1hF8uK9ipnHb-5Uzm5-hAGCFoITfeY",
		authDomain: "form-1ebd8.firebaseapp.com",
		databaseURL: "https://form-1ebd8.firebaseio.com",
		projectId: "form-1ebd8",
		storageBucket: "form-1ebd8.appspot.com",
		messagingSenderId: "210067598066",
		appId: "1:210067598066:web:f00a4350d57803b0bebe6b"
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
    
	auth.onAuthStateChanged(function (user) {
		if (user) {
            window.location = "index.html";
			var email = user.email;
			console.log("Active User " + email);
		} else {
			console.log("No Active User");
		}
	});