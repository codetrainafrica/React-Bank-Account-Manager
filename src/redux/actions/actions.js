
export const addNewAccount = (account)=>{

    return async(dispatch, getState,{getFirestore})=>{
        let firestore = getFirestore()
        try {
            await firestore
            .collection("accounts")
            .add({...account, timestamp:firestore.FieldValue.serverTimestamp()})
        } catch (error) {
            console.log(error)
        }
    }
}
export function deleteAccount(id){
    return async(dispatch, getState,{getFirestore})=>{
        let firestore = getFirestore()
        try {
            await firestore.collection("accounts").doc(id).delete()
        } catch (error) {
            
        }
    }
}

export function editAccount(account){
    return async(dispatch, getState,{getFirestore})=>{
        let firestore = getFirestore()
        try {
            await firestore
            .collection("accounts")
            .doc(account.id)
            .update(account)
        } catch (error) {
            
        }
    }
}



export function getAllAccounts(){
    return async(dispatch, getState,{getFirestore})=>{
        let firestore = getFirestore()
        await firestore
            .collection("accounts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot)=>{
                let accounts = snapshot.docs.map((doc)=>{
                    return {...doc.data(), id:doc.id}
                })
                dispatch({
                    type: "UPDATE_ALL_ACCOUNTS",
                     payload:accounts
                    })
            })
        
    }
}