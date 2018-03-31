importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-messaging.js');

var config = {
    apiKey: 'AIzaSyBkPUel0bn-Ful3kk1Nrkr79vmoSFOhlW8',
  authDomain: 'pwa-test-d6861.firebaseapp.com',
  databaseURL: 'https://pwa-test-d6861.firebaseio.com',
  projectId: 'pwa-test-d6861',
  storageBucket: 'pwa-test-d6861.appspot.com',
  messagingSenderId: '8978710009561'
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello World from SW!';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title, options);
});