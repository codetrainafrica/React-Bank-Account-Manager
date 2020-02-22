// 



// export const addNewAccount = async(account)=>{
//     let getData = new Promise((resolve,regect)=>{
//         setTimeout(()=>{
//             resolve("Good")
//         }, 5000)
//     })

//     await getData.then(()=>{
//         console.log("Hello here")
//     })
//     .catch((e)=>{})

//     return {
//         type:"ADD_ACCOUNT",
//         payload:account
//     }
// }



export const addNewAccount = (account)=>{

    return async(dispatch, getState,getFirestore)=>{
        let firestore = getFirestore()
        await firestore.collection("banks").add(account)
        dispatch({
            type:"ADD_ACCOUNT",
            payload:account
        })
    }
}

export const deleteAccount = (id)=>{
    return {
        type:"DELETE_ACCOUNT",
        payload:id
    }
}

export const editAccount = (account)=>{
    return {
        type:"EDIT_ACCOUNT",
        payload:account
    }
}