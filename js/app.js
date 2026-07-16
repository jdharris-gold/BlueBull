window.currentUser = "test-user";

// -------------------------------
// BlueBull Firebase Initialization
// -------------------------------

// TODO: Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBLeW5lL_fK6krCG9N_Sd28kjFGTWj2WIw",
  authDomain: "bluebull-39dfd.firebaseapp.com",
  projectId: "bluebull-39dfd",
  storageBucket: "bluebull-39dfd.appspot.com",
  messagingSenderId: "246819477418",
  appId: "1:246819477418:web:194af466ced6d778467dd3",
  measurementId: "G-V858F9FSSQ"
};

firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
const db = firebase.firestore();
db.settings({ host: "firestore.googleapis.com", ssl: true });
const auth = firebase.auth();

// -------------------------------
// Authentication State Listener
// -------------------------------


// -------------------------------
// Generic Save Function
// -------------------------------
async function bluebullSave(section, data) {
    if (!window.currentUser) {
        alert("Please log in first.");
        return;
    }

    try {
        await db.collection("users")
            .doc(window.currentUser)
            .collection(section)
            .doc("data")
            .set(data);

        console.log(`Saved ${section}:`, data);
    } catch (error) {
        console.error("Firestore error:", error);
    }
}

// -------------------------------
// Generic Load Function
// -------------------------------
async function bluebullLoad(section) {
    if (!window.currentUser) {
        alert("Please log in first.");
        return;
    }

    const doc = await db.collection("users")
        .doc(window.currentUser)
        .collection(section)
        .doc("data")
        .get();

    if (doc.exists) {
        console.log(`Loaded ${section}:`, doc.data());
        return doc.data();
    } else {
        console.log(`No ${section} data found.`);
        return null;
    }
}
