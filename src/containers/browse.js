import React, { useContext } from "react";
import SelectProfileContainer from "./profile";
import { FirebaseContext } from "../context/firebase";

export default function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  return <SelectProfileContainer user={user} />;
}
