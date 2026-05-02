import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { db } from "./firebase-config.js";

// We'll use a hardcoded user ID for Shyam for this dashboard
const USER_ID = "shyam_sap_prep";

/**
 * Fetches the completed days array from Firestore
 * @returns {Promise<number[]>} Array of completed day numbers
 */
export async function getCompletedDays() {
    if (!db) return []; // Fallback if Firebase isn't configured yet
    
    try {
        const docRef = doc(db, "progress", USER_ID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().completedDays || [];
        } else {
            // Document doesn't exist yet, return empty array
            return [];
        }
    } catch (error) {
        console.error("Error fetching progress from Firebase:", error);
        return [];
    }
}

/**
 * Saves the completed days array to Firestore
 * @param {number[]} completedDays - Array of completed day numbers
 */
export async function saveCompletedDays(completedDays) {
    if (!db) return; // Fallback if Firebase isn't configured yet
    
    try {
        const docRef = doc(db, "progress", USER_ID);
        await setDoc(docRef, {
            completedDays: completedDays,
            lastUpdated: new Date().toISOString()
        }, { merge: true }); // merge: true keeps other fields intact
        console.log("Progress saved to Firebase");
    } catch (error) {
        console.error("Error saving progress to Firebase:", error);
    }
}
