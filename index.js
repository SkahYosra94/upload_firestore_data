var firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyC8NoErDl9H95h5gbygkMhSNzkJQcUzmLk",
  authDomain: "base-recette-da810.firebaseapp.com",
  databaseURL: "https://base-recette-da810-default-rtdb.firebaseio.com",
  projectId: "base-recette-da810",
  storageBucket: "base-recette-da810.appspot.com",
  messagingSenderId: "418477982775",
  appId: "1:418477982775:web:4bfc16fb88c6a077276bb2",
  measurementId: "G-YFEK5EWBYW"
  });
  
var db = firebase.firestore();
var teams= [
  {
    "teamId": 100,
    "teamName": "AIX LES MILLES + LA DURANNE",
    "driversList": [1],
    "driversOnDuty": 0,
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
    "teamName": "CENTRALE 13001 + 13002 + 13003 + 13004 + 13005",
    "driversList": [4, 5, 6],
    "driversOnDuty": 2,
    "dispatchersList": [22, 23, 24],
    "hub": "centrale"
  },
  {
    "teamId": 103,
    "teamName": "MONTPELLIER",
    "driversList": [7, 8],
    "driversOnDuty": 1,
    "dispatchersList": [22, 23, 24, 25, 26],
    "hub": "montpellier"
  }
];

var drivers=[
  {
    "driverId": 1,
    "driverName": "Théo F.",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "latitude": 43.49791185100462,
    "longitude": 5.428181787218768,
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [100],
    "tasks": [50]
  },
  {
    "driverId": 2,
    "driverName": "Sonia",
    "driverPhone": "123 456 800",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "latitude": 43.478064425146925,
    "longitude": 5.4217484764493955,
    "status": "Idle",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [101],
    "tasks": [51]
  },
  {
    "driverId": 3,
    "driverName": "Michael",
    "driverPhone": "123 456 900",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "latitude": 43.50801418746426,
    "longitude": 5.358379074452854,
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [101],
    "tasks": [52, 53]
  },
  {
    "driverId": 4,
    "driverName": "FALLOU",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "latitude": 43.55699085059365,
    "longitude": 5.338747550517996,
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [102],
    "tasks": [54, 55, 56]
  },
  {
    "driverId": 5,
    "driverName": "Christophe",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "latitude": 43.57581743791173,
    "longitude": 5.2583449145364565,
    "status": "Idle",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [102],
    "tasks": [57]
  },
  {
    "driverId": 6,
    "driverName": "Camara",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "latitude": 43.564731381880485,
    "longitude": 5.134204399448797,
    "status": "Idle",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [102],
    "tasks": [58]
  },
  {
    "driverId": 7,
    "driverName": "Matthias",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "latitude": 43.56619569465648,
    "longitude": 5.034603287802282,
    "status": "In transit",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [103],
    "tasks": [59]
  },
  {
    "driverId": 8,
    "driverName": "Navid",
    "driverPhone": "123 456 789",
    "driverPhoneDetails": "iPhone11,8 (iOS 14.4), Version 1.11.1",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "latitude": 43.63372456366139,
    "longitude": 5.027530164791552,
    "status": "Offline",
    "totalTasks": 47,
    "completedTasks": 46,
    "finishBy": "12:39",
    "delayedTasks": 0,
    "teams": [103],
    "tasks": []
  }
];
var tasks= [
  {
    "taskId": 50,
    "recipient": "Nier Andréa",
    "recipientPhoneNumber": "00 33 12 45 77",
    "recipientNotes": "Nier Andréa recipientNotes",
    "taskDetails": "Nier Andréa recipientNotes",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "quantity": 1,
    "serviceTime": "10 min",
    "assignedTo": { "type": "driver", "id": 1 },
    "latitude": 43.67606024135647,
    "longitude": 5.111508552894716,
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
    "recipient": "agence Fautra christelle",
    "recipientPhoneNumber": "00 33 12 45 77",
    "recipientNotes": "Nier Andréa recipientNotes",
    "taskDetails": "Nier Andréa recipientNotes",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Assigned",
    "quantity": 1,
    "serviceTime": "10 min",
    "assignedTo": { "type": "driver", "id": 2 },
    "latitude": 43.56236384254165,
    "longitude": 5.022300601986311,
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
    "recipient": "Martin-Chave Antoine",
    "recipientPhoneNumber": "00 33 12 45 77",
    "recipientNotes": "Nier Andréa recipientNotes",
    "taskDetails": "Nier Andréa recipientNotes",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "quantity": 1,
    "serviceTime": "10 min",
    "assignedTo": { "type": "driver", "id": 3 },
    "latitude": 43.54510250795953,
    "longitude": 4.99891599288709,
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
    "recipient": "Matalini Nicolas",
    "recipientPhoneNumber": "00 33 12 45 77",
    "recipientNotes": "Matalini Nicolas recipientNotes",
    "taskDetails": "Nier Andréa taskDetails",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Assigned",
    "quantity": 1,
    "serviceTime": "10 min",
    "assignedTo": { "type": "driver", "id": 3 },
    "latitude": 43.53882443299274,
    "longitude": 4.971200901974761,
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
    "recipient": "Bozon Martin",
    "recipientPhoneNumber": "00 33 12 45 77",
    "recipientNotes": "Nier Andréa recipientNotes",
    "taskDetails": "Nier Andréa recipientNotes",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Succeeded",
    "quantity": 1,
    "serviceTime": "10 min",
    "assignedTo": { "type": "driver", "id": 4 },
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
    "recipient": "Juli El Kouby",
    "recipientPhoneNumber": "00 33 12 45 77",
    "recipientNotes": "Nier Andréa recipientNotes",
    "taskDetails": "Nier Andréa recipientNotes",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "quantity": 1,
    "serviceTime": "10 min",
    "assignedTo": { "type": "driver", "id": 4 },
    "latitude": 43.56595329641774,
    "longitude": 5.103236181614136,
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
    "taskId": 56,
    "recipient": "Vanissa Marengo",
    "recipientPhoneNumber": "00 33 12 45 77",
    "recipientNotes": "Nier Andréa recipientNotes",
    "taskDetails": "Nier Andréa recipientNotes",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Assigned",
    "quantity": 1,
    "serviceTime": "10 min",
    "assignedTo": { "type": "driver", "id": 4 },
    "latitude": 43.56241173846635,
    "longitude": 5.183137299210541,
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
    "taskId": 57,
    "recipient": "Nier Andréa",
    "recipientPhoneNumber": "00 33 12 45 77",
    "recipientNotes": "Nier Andréa recipientNotes",
    "taskDetails": "Nier Andréa recipientNotes",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Assigned",
    "quantity": 1,
    "serviceTime": "10 min",
    "assignedTo": { "type": "driver", "id": 5 },
    "latitude": 43.60684760022485,
    "longitude": 5.23378752406949,
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
    "taskId": 58,
    "recipient": "Nier Andréa",
    "recipientPhoneNumber": "00 33 12 45 77",
    "recipientNotes": "Nier Andréa recipientNotes",
    "taskDetails": "Nier Andréa recipientNotes",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "Failed",
    "quantity": 1,
    "serviceTime": "10 min",
    "assignedTo": { "type": "driver", "id": 6 },
    "latitude": 43.64015029080553,
    "longitude": 5.23121260402836,
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
    "taskId": 59,
    "recipient": "Nier Andréa",
    "recipientPhoneNumber": "00 33 12 45 77",
    "recipientNotes": "Nier Andréa recipientNotes",
    "taskDetails": "Nier Andréa recipientNotes",
    "address": "130 Rue Frédéric Joliot",
    "buildingAddress": "app 03",
    "destinationNotes": "130 Rue Frédéric Joliot destinationNotes",
    "completeAfter": "12:00",
    "completedBefore": "12:30",
    "status": "In transit",
    "quantity": 1,
    "serviceTime": "10 min",
    "assignedTo": { "type": "driver", "id": 7 },
    "latitude": 43.678028295666444,
    "longitude": 5.203746784501976,
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
  }
];

/*teams.forEach(function(obj) {
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
});*/


drivers.forEach(function(obj) {
  db.collection(`drivers`).add({ 
    driverId: obj.driverId,
    driverName: obj.driverName,
    driverPhone: obj.driverPhone,
    driverPhoneDetails: obj.driverPhoneDetails,
    address: obj.address,
    buildingAddress: obj.buildingAddress,
    latitude: obj.latitude,
    longitude: obj.longitude,
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

/*tasks.forEach(function(obj) {
  db.collection(`tasks`).add({        
    taskId: obj.taskId,
    recipient: obj.recipient,
    recipientPhoneNumber: obj.recipientPhoneNumber,
    recipientNotes: obj.recipientPhoneNumber,
    taskDetails: obj.taskDetails,
    address: obj.address,
    buildingAddress: obj.buildingAddress ,
    destinationNotes: obj.destinationNotes ,
    completeAfter: obj.completeAfter,
    completedBefore: obj.completedBefore,
    status: obj.status ,
    quantity: obj.quantity ,
    serviceTime: obj.serviceTime ,
    assignedTo: obj.assignedTo,
    latitude: obj.latitude ,
    longitude: obj.longitude ,
    isTaskGroup: obj.isTaskGroup ,
    subTasks: obj.subTasks ,
    taskTimeLine: obj.taskTimeLine 
  }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
});*/