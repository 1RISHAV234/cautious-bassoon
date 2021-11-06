const firebaseConfig = {

    apiKey: "AIzaSyAsHFulYQp7gwRY_s02IDawUPL6zH4WFNc",

    authDomain: "message-259cc.firebaseapp.com",

    databaseURL: "https://message-259cc-default-rtdb.firebaseio.com",

    projectId: "message-259cc",

    storageBucket: "message-259cc.appspot.com",

    messagingSenderId: "546751141341",

    appId: "1:546751141341:web:7551e48e8aae6a77139234",

    measurementId: "G-DV1FZXPXQR"

};

var roomarraay = [];

firebase.initializeApp(firebaseConfig);

function setuid() {
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    var room_id = val;
    localStorage.setItem("rooms_id", room_id);
    firebase.database().ref("room ids").push({
        room_number: room_id
    });
    output = "<div class='bg-success'><h1 class='.text-primary'>Success!</h1><p>An UID has been opened at "+val+" :)</p></div>"
    document.getElementById("output").innerHTML=output;
}

function loginuid() {
    var ref = firebase.database().ref("room ids");
    ref.on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            var id = childData.id;
            console.log(childSnapshot.val());
        });
    });
}