import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { db } from "./firebase-config.js";

const USER_ID = "shyam_sap_prep";

/**
 * Fetches the completed concepts array from Firestore
 * @returns {Promise<string[]>} Array of completed concept IDs
 */
export async function getCompletedConcepts() {
    if (!db) return []; 
    
    try {
        const docRef = doc(db, "progress", USER_ID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().completedConcepts || [];
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching progress from Firebase:", error);
        return [];
    }
}

/**
 * Saves the completed concepts array to Firestore
 * @param {string[]} completedConcepts - Array of completed concept IDs
 */
export async function saveCompletedConcepts(completedConcepts) {
    if (!db) return; 
    
    try {
        const docRef = doc(db, "progress", USER_ID);
        await setDoc(docRef, {
            completedConcepts: completedConcepts,
            lastUpdated: new Date().toISOString()
        }, { merge: true }); 
        console.log("Progress saved to Firebase");
    } catch (error) {
        console.error("Error saving progress to Firebase:", error);
    }
}
