/**
 * Created by Sufiyan Bawany on 5/22/2017.
 */
(function(){

var config = {
    apiKey: "AIzaSyBIxvKenjiqG0riV3NV3NXyYv7xUaGQ1qY",
    authDomain: "connectmyform.firebaseapp.com",
    databaseURL: "https://connectmyform.firebaseio.com",
    projectId: "connectmyform",
    storageBucket: "connectmyform.appspot.com",
    messagingSenderId: "313407740828"
};
firebase.initializeApp(config);
/*Get ELements*/
const preObject=document.getElementById('object');
/*Create Refrences*/
const dbRefObject=firebase.database().ref().child('object');
/*Sync Object Changes*/
dbRefObject.on('value', snap  > console.log(snap.val()));

}());