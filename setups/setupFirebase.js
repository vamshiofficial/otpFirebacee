import React from 'react'
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBGNXmSFStddPZgfhySF_PFdN8RTEKcnYI",
    authDomain: "fir-otp-a511c.firebaseapp.com",
    projectId: "fir-otp-a511c",
    storageBucket: "fir-otp-a511c.appspot.com",
    messagingSenderId: "457065465589",
    appId: "1:457065465589:web:42367fd4c5a9966bca67bc"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default () => {
    return { firebase, auth }
}
// Variant: debugAndroidTest
// Config: debug
// Store: C:\APPS\otpFirebacee\android\app\debug.keystore
// Alias: androiddebugkey
// MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
// SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
// SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
// Valid until: Wednesday, May 1, 2052