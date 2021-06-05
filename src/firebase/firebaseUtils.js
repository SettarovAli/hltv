import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
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
    const { country, name, id, logoLink } = teamInfo;
    const createdAt = new Date();

    try {
      await docRef.set({
        country,
        name,
        id,
        logoLink,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating team", error.message);
    }
  }

  return docRef;
};

export const addNewPlayer = async (playerInfo, additionalData) => {
  const docRef = firestore.collection("players").doc(`${playerInfo.id}`);
  const snapShot = await docRef.get();

  if (!snapShot.exists) {
    const { country, name, id, logoLink } = playerInfo;
    const createdAt = new Date();

    try {
      await docRef.set({
        country,
        name,
        id,
        logoLink,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating player", error.message);
    }
  }

  return docRef;
};

export const convertTeamsSnapshotToMap = (teams) => {
  const transformedTeams = teams.docs.map((doc) => {
    const { country, name, id, logoLink } = doc.data();

    return {
      country,
      name,
      id,
      logoLink,
    };
  });

  return keyBy(transformedTeams, "id");
};

export const convertPlayersSnapshotToMap = (players) => {
  const transformedPlayers = players.docs.map((doc) => {
    const { country, name, id, logoLink } = doc.data();

    return {
      country,
      name,
      id,
      logoLink,
    };
  });

  return keyBy(transformedPlayers, "id");
};

export default firebase;
