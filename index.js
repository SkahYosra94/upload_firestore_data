var firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAqURq09onl9VtFjqrUvjNciTkZ_5c8Pts",
  authDomain: "basil-fleet.firebaseapp.com",
  projectId: "basil-fleet",
  storageBucket: "basil-fleet.appspot.com",
  messagingSenderId: "125968435732",
  appId: "1:125968435732:web:84937f40c7e63e23dab501",
  measurementId: "G-D6VH99LZXP"
});

var db = firebase.firestore();
var teams= [
  {
    "teamId": 100,
    "teamName": "AIX LES MILLES + LA DURANNE",
    "driversList": [1],
    "driversOnDuty": 1,
    //Liste des clées etrangers  dispatchers
    "dispatchersList": [22, 23, 24, 78],
    "hub": "Aix les milles"
  },
  {
    "teamId": 101,
    "teamName": "BATEAU BLEU + Château Gombert",
    "driversList": [2, 3],
    "driversOnDuty": 1,
    "dispatchersList": [22, 23, 78],
    "hub": "Aix les milles"
  },
  {
    "teamId": 102,
    "teamName": "BATEAU BLEU",
    "driversList": [4,5,6,7,8,9],
    "driversOnDuty": 1,
    "dispatchersList": [22, 23, 78],
    "hub": "Aix les milles"
  },
  {
    "teamId": 103,
    "teamName": "BATEAU BLEU",
    "driversList": [7,8,9],
    "driversOnDuty": 1,
    "dispatchersList": [22, 23, 78],
    "hub": "Aix les milles"
  }
];

var drivers=[
  {
    "driverId": 1,
    "address": {

      "adressId":1,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.49791185100462,
      "longitude": 5.428181787218768


    },
    "driverName": "Théo F.",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [100],
    "tasks": [50,53,54]
  },
  {
    "driverId": 2,
    "driverName": "Sonia",
    "driverPhone": "123 456 800",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",

    "address":{

      "adressId":2,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.478064425146925,
      "longitude": 5.4217484764493955,


    },
    "status": "Idle",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [101],
    "tasks": [51,52]
  },
  {
    "driverId": 3,
    "driverName": "Michael",
    "driverPhone": "123 456 900",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "address": {
      "adressId":3,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": null,
      "longitude": null

    }
    ,
    "status": "Offline",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [101],
    "tasks": []
  },{
    "driverId": 4,
    "address": {

      "adressId":1,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.49791185100462,
      "longitude": 5.428181787218768


    },
    "driverName": "Théo F.",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [102],
    "tasks": [100,101,102,103,104,105]
  },{
    "driverId": 5,
    "address": {

      "adressId":1,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.49791185100462,
      "longitude": 5.428181787218768


    },
    "driverName": "Théo F.",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [102],
    "tasks": [106,107]
  },{
    "driverId": 6,
    "address": {

      "adressId":1,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.49791185100462,
      "longitude": 5.428181787218768


    },
    "driverName": "Théo F.",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [102,103],
    "tasks": [108,109]
  },{
    "driverId": 7,
    "address": {

      "adressId":1,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.49791185100462,
      "longitude": 5.428181787218768


    },
    "driverName": "Théo F.",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [102,103],
    "tasks": [110,111]
  },{
    "driverId": 8,
    "address": {

      "adressId":1,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.49791185100462,
      "longitude": 5.428181787218768


    },
    "driverName": "Théo F.",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [102,103],
    "tasks": [112]
  },{
    "driverId": 9,
    "address": {

      "adressId":1,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.49791185100462,
      "longitude": 5.428181787218768


    },
    "driverName": "Théo F.",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [102,103],
    "tasks": [113]
  },
];
var tasks= [
  {
    "taskId": 113,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 9 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 112,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 8 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 108,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 6 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 109,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 6 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 110,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 7 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 111,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 7 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 50,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 1 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },
  {
    "taskId": 51,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "address":{
      "adressId":5,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.56236384254165,
      "longitude": 5.022300601986311,
    },

    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Assigned",
    "assignedTo": { "type": "driver", "id": 2 },

    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },
  {
    "taskId": 52,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "address":{
      "addressId":6,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.678028295666444,
      "longitude": 5.203746784501976,
    },
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Assigned",
    "assignedTo": { "type": "driver", "id": 2 },

    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },
  {
    "taskId": 53,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa taskDetails",
    "address":{
      "addressId":7,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.53882443299274,
      "longitude": 4.971200901974761,
    },
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Assigned",
    "assignedTo": { "type": "driver", "id": 1 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },
  {
    "taskId": 54,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "address":{
      "addressId":8,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.54000866400415,
      "longitude": 5.066715774889157
    },
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Succeeded",
    "assignedTo": { "type": "driver", "id": 1 },
    "latitude": 43.54000866400415,
    "longitude": 5.066715774889157,
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },
  {
    "taskId": 55,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "address":{
      "addressId":9,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.56595329641774,
      "longitude": 5.103236181614136,
    },
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Unassigned",
    "assignedTo": { "type": "team", "id": 101 },

    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 100,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 4 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 101,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 4 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 102,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 4 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 103,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 4 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 104,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 4 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 105,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 4 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 106,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 5 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },{
    "taskId": 107,
    "recipient":{
      "recipientId":1,
      "firstName":"Nier",
      "lastName":"Andréa",
      "phone": "00 33 12 45 77",
      "email":"",
      "note": "Nier Andréa recipientNotes",
      "address":{
        "adressId":4,
        "streetNumber":"130",
        "street":"Rue Frédéric Joliot",
        "postalCode":"1400",
        "city":"Marseille",
        "region":"france",
        "countryCode":"15898",
        "buildingAddress": "app 03",
        "latitude": 43.67606024135647,
        "longitude": 5.111508552894716
      }

    },
    "taskDetails": "Nier Andréa recipientNotes",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "address":{

      "adressId":4,
      "streetNumber":"130",
      "street":"Rue Frédéric Joliot",
      "postalCode":"1400",
      "city":"Marseille",
      "region":"france",
      "countryCode":"15898",
      "buildingAddress": "app 03",
      "latitude": 43.67606024135647,
      "longitude": 5.111508552894716
    },
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "assignedTo": { "type": "driver", "id": 5 },
    "isTaskGroup": false,
    "subTasks": [],
    "taskTimeLine": {
      "isDelayed": true,
      "willBeFinishedBy": "12:39",
      "taskDuration": "12 minutes",
      "totalDistanceTraveled": "4.3 kilometers",
      "timeLine": [
        {
          "status": "task created",
          "time": "Date",
          "details": "Assigned by Arther"
        }
      ]
    }
  },
];

teams.forEach(function(obj) {
  db.collection(`teams`).add({
    teamId: obj.teamId,
    teamName: obj.teamName,
    driversList: obj.driversList,
    driversOnDuty: obj.driversOnDuty,
    dispatchersList: obj.dispatchersList,
    hub: obj.hub
  }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
});


drivers.forEach(function(obj) {
  db.collection(`drivers`).add({
    driverId: obj.driverId,
    driverName: obj.driverName,
    driverPhone: obj.driverPhone,
    driverPhoneDetails: obj.driverPhoneDetails,
    address: obj.address,
    status: obj.status,
    totalTasks: obj.totalTasks,
    completedTasks: obj.completedTasks,
    finishBy: obj.finishBy,
    delayedTasks: obj.delayedTasks,
    teams: obj.teams,
    tasks: obj.tasks
  }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
});

tasks.forEach(function(obj) {
  db.collection(`tasks`).add({
    taskId: obj.taskId,
    recipient: obj.recipient,
    taskDetails: obj.taskDetails,
    address: obj.address,
    destinationNotes: obj.destinationNotes ,
    completeAfter: obj.completeAfter,
    completedBefore: obj.completedBefore,
    status: obj.status ,
    assignedTo: obj.assignedTo,
    subTasks: obj.subTasks ,
    taskTimeLine: obj.taskTimeLine
  }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
});