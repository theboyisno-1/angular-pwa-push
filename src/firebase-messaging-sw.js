importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-messaging.js');

var config = {
    apiKey: 'api-key',
  authDomain: 'pwa-test.firebaseapp.com',
  databaseURL: 'https://pwa-test-d6861.firebaseio.com',
  projectId: 'pwa-test',
  storageBucket: 'pwa-test.appspot.com',
  messagingSenderId: 'Id'
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
