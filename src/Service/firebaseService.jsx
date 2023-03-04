import { database } from "../FirebaseConfig/firebaseConfig";
import { useState } from "react";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-hot-toast";

const auth = getAuth();


// if(auth.currentUser.photoURL){
//   photoURL = auth.currentUser.photoURL;
// }

class userDataService {
  addUser = async (dataName, dataEmail,dataId) => {
    return setDoc(doc(database, "users", auth.currentUser.uid), {
      name: dataName,
      email: dataEmail,
      userId: dataId,
    });
  };

  getUser = () => {
    const docRef = doc(database, "users", auth.currentUser.uid);
    return docRef;
  };
}

const dbInstance = collection(database, "TodoList");
class todoDataService {
  addTodos = (data, completed) => {
    return addDoc(dbInstance, {
      todoid: data.id,
      task: data.task,
      userId: auth.currentUser.uid,
      isCompleted: completed,
    });
  };

  updateTodo = (id, data, completed) => {
    const todoDoc = doc(dbInstance, id);
    if (data.task == "" || completed == null) {
      toast.error("Please enter Data to Textfield");
      return;
    }
    const increaseage = { task: data.task, isCompleted: completed };
    // const updatedImg = { imgUrl: auth.currentUser.photoURL};
    // console.log(id)
    updateDoc(todoDoc, increaseage)
    // updateDoc(userDoc,updatedImg)
      .then(() => {
        toast.success("Upadted SuccessFully");
      })
      .catch((err) => {
        toast.error("Please enter Data to Textfield");
      });
  };

  deleteTodo = (id) => {
    const todoDoc = doc(dbInstance, id);
    deleteDoc(todoDoc).then(() => {
      toast.success("successfully deleted");
    });
  };

  //   getAllTodos = () => {
  //     return getDocs(todoCollectionRef);
  //   };

  getTodos = (setUsers) => {
    const dbInstance = collection(database, "TodoList");
    const data = getDocs(dbInstance);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
}
export default new userDataService();
todoDataService = new todoDataService();
export { todoDataService };