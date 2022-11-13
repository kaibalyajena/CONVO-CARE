const firebaseConfig = {
    apiKey: "AIzaSyCtiSYPiMU1D70kHkFOAfOuwm62wUeGEuA",
    authDomain: "convo-care.firebaseapp.com",
    databaseURL: "https://convo-care-default-rtdb.firebaseio.com",
    projectId: "convo-care",
    storageBucket: "convo-care.appspot.com",
    messagingSenderId: "387369842039",
    appId: "1:387369842039:web:ef16c31116a1e9e4e91d72"
  };

  //initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var detail_formDB=firebase.database().ref('detail_form');
document.getElementById("detail_form").addEventListener("submit",submitForm);

function submitFor(e){
    e.preventDefault();
    console.log("hello");
}

function submitForm(e){
    e.preventDefault();

    var c1name=getElementVal('c1name');
    var c1phone=getElementVal('c1phone');
    var c2name=getElementVal('c2name');
    var c2phone=getElementVal('c2phone');
    var c3name=getElementVal('c3name');
    var c3phone=getElementVal('c3phone');
    

    saveMessages(c1name,c1phone,c2name,c2phone,c3name,c3phone);

    // //enable the alert message
    // document.querySelector('.alert').style.display='block';

    // //remove the alert
    // setTimeout(()=>{
    //     document.querySelector('.alert').style.display='none';
    // },10000);

    //reset the form
    document.getElementById("detail_form").reset();
    console.log(c1name,c1phone,c2name,c2phone,c3name,c3phone);
}

//save message to firebase
const saveMessages=(c1name,c1phone,c2name,c2phone,c3name,c3phone)=>{
    var new_detail_form=detail_formDB.push();
    new_detail_form.set({
        c1name:c1name,
        c1phone:c1phone,
        c2name:c2name,
        c2phone:c2phone,
        c3name:c3name,
        c3phone:c3phone
    });
};

const getElementVal=(id)=>{
    return document.getElementById(id).value;
};