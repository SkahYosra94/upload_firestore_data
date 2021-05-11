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
      "location":{
        "latitude": 43.49791185100462,
        "longitude": 5.428181787218768
      }
      


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
      "location":{
        "latitude": 43.478064425146925,
        "longitude": 5.4217484764493955,
      } 


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
      "location":{
        "latitude": null,
        "longitude": null
      }
      

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
      "location":{
        "latitude": 43.49791185100462,
        "longitude": 5.428181787218768
      }
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
      "location":{
        "latitude": 43.36672351634796, 
        "longitude": 5.208139765259993
      } 


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
      "location":{
        "latitude": 43.38469108772336, 
        "longitude": 5.385980943335134
      }   


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
      "location":{
        "latitude": 43.40065779287025, 
        "longitude": 5.517816874572305
      }


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
      "location":{
        "latitude": 43.23679966799762, 
        "longitude": 5.574808449013374
      } 


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
      "location":{
        "latitude": 43.333269695901215, 
        "longitude": 5.49378428294053
      }
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
        "location":{
          "latitude": 43.67606024135647,
          "longitude": 5.111508552894716
        }
      
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
      "location":{
        "latitude":43.274306194528684,
        "longitude": 5.37362132478165
      }
     
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
        "location":{
          "latitude": 43.26630674064111, 
          "longitude": 5.457392072755269
        }
      
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
      "location":{
        "latitude": 43.368221017299916, 
        "longitude": 5.116815917059244
      }
  
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
        "location":{
          "latitude": 43.40863956796197, 
          "longitude": 5.206766474309607
        }
        
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
      "location":{
        "latitude": 43.411133657003084, 
        "longitude": 5.55283579380718
      }
     
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
        "location":{
          "latitude": 43.45252053181852, 
          "longitude": 5.263071403275481
        }
        
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
      "location":{
        "latitude":43.2197890995395, 
        "longitude":5.464258527507204
      }
      
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
        "location":{
          "latitude": 43.2733063202903,
          "longitude":  5.602960913496311
        }
        
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
      "location":{
        "latitude": 43.40315221055847, 
        "longitude": 5.512323710770757
      }
      
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
        "location":{
          "latitude": 43.429586723857135, 
          "longitude":5.634546605355217
        }
        
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
      "location":{
        "latitude": 43.441054715547544,
        "longitude":  5.507517194760338
      }
      
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
        "location":{
          "latitude": 43.46448254680944, 
          "longitude": 5.602960915812248
        }
       
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
      "location":{
        "latitude":43.376706158749016, 
        "longitude": 5.467691757199109
      }
    
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
        "location":{
          "latitude": 43.27730571972552, 
          "longitude": 5.55764231444947
        }
        
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
      "location":{
        "latitude": 43.436567499772416, 
        "longitude": 5.666818945005253
      }
      
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
        "location":{
          "latitude": 43.364726791951384,
          "longitude":  5.083856936565887
        }
        
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
      "location":{
        "latitude": 43.22679402723021, 
        "longitude": 5.6084540796137965
      }
     
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
        "location":{
          "latitude": 43.25580586292617, 
          "longitude": 5.683298436409899
        }
        
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
      "location":{
        "latitude": 43.29579951812946, 
        "longitude": 5.655145971926962
      }
    
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
        "location":{
          "latitude": 43.470462666338506,
          "longitude":  5.613260597940152
        }
      
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
      "location":{
        "latitude": 43.424101265476224,
        "longitude":  5.6338599621959595
      }
      
    },
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Succeeded",
    "assignedTo": { "type": "driver", "id": 1 },
    "latitude": 43.38219591110622,
    "longitude":  5.52125010426421,
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
        "location":{
          "latitude": 43.41761780890471,
          "longitude":  5.403147082530911
        }
        
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
      "location":{
        "latitude": 43.365725162889255, 
        "longitude": 5.12642895602789
      }
      
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
        "location":{
          "latitude": 43.218287940165, 
          "longitude": 5.497217512632433
        }
     
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
      "location":{
        "latitude": 43.22779466533098, 
        "longitude": 5.57274851490373
      }
      
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
        "location":{
          "latitude": 43.42809073981381,
          "longitude":  5.598154397485893
        }
      
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
      "location":{
        "latitude": 43.44005758524487, 
        "longitude": 5.497217512632433
      }
      
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
        "location":{
          "latitude": 43.509319021819614, 
          "longitude": 5.436106065340203
        }
       
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
      "location":{
        "latitude": 43.50234664489956, 
        "longitude": 5.255518305364287
      }
      
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
        "location":{
          "latitude": 43.50284469852997, 
          "longitude": 5.2410987503852215
        }
        
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
      "location":{
        "latitude": 43.33826397514572, 
        "longitude": 5.221186031604606
      }
      
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
        "location":{
          "latitude": 43.46946602083611,
          "longitude":  5.604334206762636
        }
        
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
      "location":{
        "latitude": 43.29729876886953,
        "longitude":  5.6688788814308335
      }
      
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
        "location":{
          "latitude": 43.39317392464826, 
          "longitude": 5.6215003436424755
        }
       
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
      "location":{
        "latitude": 43.4340744583278,
        "longitude":  5.492410994306078
      }
     
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
        "location":{
          "latitude": 43.425098658710105,
          "longitude":  5.436106065340203
        }
       
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
      "location":{
      "latitude": 43.38718616373816, 
      "longitude":5.084543582041081
    }
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
        "location":{
        "latitude": 43.45750499293688, 
        "longitude": 5.594034524634731
      }
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
      "location":{
      "latitude": 43.43058402775633, 
      "longitude": 5.6750586907075755
    }
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