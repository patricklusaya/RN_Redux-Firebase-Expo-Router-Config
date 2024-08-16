import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig"
import { USER_ADDED } from "../Types";

 export const sendUserData  = (fullName) =>{

    return async (dispatch) =>{

    const userID = Math.random().toString(36).substring(2, 15);

        try {

            const userDocRef = doc( db, "users", userID);
            await setDoc(userDocRef,{name:fullName} )
            console.log('data saved')
            dispatch({type:USER_ADDED})
            
            
        } catch (error) {

            console.log('error saving data', error)
            
        }
    }
    


}


