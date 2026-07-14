// -------------------------------
// BlueBull Firebase Initialization
// -------------------------------

// TODO: Replace with your Firebase config
const firebaseConfig = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// -------------------------------
// Authentication State Listener
// -------------------------------
auth.onAuthStateChanged(user => {
    if (user) {
        window.currentUser = user.uid;
        console.log("Logged in:", user.uid);
    } else {
        window.currentUser = null;
        console.log("Not logged in");
    }
});

// -------------------------------
// Generic Save Function
// -------------------------------
async function bluebullSave(section, data) {
    if (!window.currentUser) {
        alert("Please log in first.");
        return;
    }

    await db.collection("users")
        .doc(window.currentUser)
        .collection(section)
        .doc("data")
        .set(data);

    console.log(`Saved ${section}:`, data);
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
