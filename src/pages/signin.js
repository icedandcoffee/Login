'use strict';
import React, {Component} from 'react';
import {
  Alert,
  AppRegistry,
  Component,
  Text,
  TextInput,
  View
} from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC4lENoBLC8Y7DwOIlAvdDvgQ-xHivv5c4",
  authDomain: "login-86372.firebaseapp.com",
  databaseURL: "https://login-86372.firebaseio.com",
  projectId: "login-86372",
  storageBucket: "login-86372.appspot.com",
  messagingSenderId: "1080041205733"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class Signup extends Component {
  constructor(props){
    super(props);
      this.state = {
        loaded: true,
        email: '',
        password: ''
      };
  }

  signup() {
    let email=this.state.email
    let password=this.state.password
    firebaseApp.auth().createUserWithEmailAndPassword(email,password)
    .catch((error)=>{
      let errorCode = error.code;
      let errorMessage = error.message;
      switch(error.code){
        case "EMAIL_TAKEN":
          Alert.alert("The email is already in use");
          break;
        case "INVALID_EMAIL":
          Alert.alert("The specified email is not a valid email");
          break;
        }
      });
    }




}
