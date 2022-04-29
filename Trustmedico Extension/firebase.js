var firebaseConfig = {
  projectId: 'trustmedicos-c3f2a',
  appId: '1:413045498012:web:2618f942d2ec53cb968d59',
  storageBucket: 'trustmedicos-c3f2a.appspot.com',
  locationId: 'europe-west',
  apiKey: 'AIzaSyBNps55n8XN4rAO1z7KWtSOmyv0nFXJDTA',
  authDomain: 'trustmedicos-c3f2a.firebaseapp.com',
  messagingSenderId: '413045498012',
  measurementId: 'G-98BGDR20BN',
}

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

console.log(firebase);

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command == 'logoutAuth') {
    firebase.auth().signOut().then(function () {
      response({ type: "un-auth", status: "success", message: true });
    }, function (error) {
      response({ type: "un-auth", status: "false", message: error });
    });
  }
  if (msg.command == 'checkAuth') {
    var user = firebase.auth().currentUser;
    if (user) {
      response({ type: "auth", status: "success", message: user });
    } else {
      response({ type: "auth", status: "no-auth", message: false });
    }
  }
  if (msg.command == 'loginUser') {
    console.log(msg.data);
    var email = msg.data.e;
    var pass = msg.data.p;
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      response({ type: "auth", status: "error", message: error });
    });
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        response({ type: "auth", status: "success", message: user });
      } else {

      }
    });
  }
  if (msg.command == "post") {
    var user = firebase.auth().currentUser;


    // addData(msg)
    console.log('hello');

    GetTrust(msg, user);
    response({ type: "auth", status: "success" });
    return true;
  }

  return true;
});

async function addData(msg) {
  db.collection('urls').add(msg.data)
}


async function GetTrust(msg, user) {
  var x = 0;
  var mark;
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;
  const d = new Date();

  chrome.extension.getBackgroundPage().console.log("Inside frebase");
  db.collection("urls").where("url", "==", msg.url).get().then((doc) => {
    doc.forEach((doc) => {
      x = x + 1
    })
    if (x > 0) {
      db.collection("urls").where("url", "==", msg.url).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            db.collection("urls").where("url", "==", msg.url).get().then((querySnapshot) => {
              querySnapshot.forEach((element) => {
                var Fake = element.data();
                mark = parseInt(Fake.marked) + 1
              })
            }).then(() => {
              var Ref = db.collection("urls").doc(doc.id);
              return Ref.update({
                marked: mark,
                user: user.email,
                timestamp: d
              })
            })
              .then(() => {
                //response({status: 'success'})

              })
              .catch((error) => {
                chrome.extension.getBackgroundPage().console.log("Error getting documents: ", error);
              });
          });
        })
        .catch((error) => {
          chrome.extension.getBackgroundPage().console.log("Error getting documents: ", error);
        });
    } else {
      db.collection("urls").add({
        url: msg.url,
        title: msg.title,
        // commetn: msg.comment,
        positives: 0,
        negatives: 0,
        marked: 1,
        report_count: 1,
        user: user.email,
        timestamp: d
      })
    }
  })
}