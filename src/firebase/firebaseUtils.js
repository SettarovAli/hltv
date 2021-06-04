import firebase from "firebase/app";
import "firebase/firestore";
import keyBy from "lodash.keyby";

const config = {
  apiKey: "AIzaSyDOyDlt078k0Can3itb2MFvDTQweEeBEAI",
  authDomain: "hltv-63d69.firebaseapp.com",
  projectId: "hltv-63d69",
  storageBucket: "hltv-63d69.appspot.com",
  messagingSenderId: "37337568917",
  appId: "1:37337568917:web:e838c963db5a5c1c36ed9c",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(`${obj.id}`);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const addNewTeam = async (teamInfo, additionalData) => {
  const docRef = firestore.collection("teams").doc(`${teamInfo.id}`);
  const snapShot = await docRef.get();

  if (!snapShot.exists) {
    const { country, name, id } = teamInfo;
    const createdAt = new Date();

    try {
      await docRef.set({
        country,
        name,
        id,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating team", error.message);
    }
  }

  return docRef;
};

export const convertTeamsSnapshotToMap = (teams) => {
  const transformedTeams = teams.docs.map((doc) => {
    const { country, name, id } = doc.data();

    return {
      country,
      name,
      id,
    };
  });

  return keyBy(transformedTeams, "id");
};

export default firebase;
