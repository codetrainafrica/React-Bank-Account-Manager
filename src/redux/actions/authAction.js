export const createAccount=(email,password)=>{
    return (dispatch, getState, {getFirebase})=>{
        let firebase = getFirebase()
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user)=>{
                console.log(user)
            })
            .catch((e)=>{
                console.log(e)
            })
    }
}


export const loginAccount=(email,password)=>{
    return (dispatch, getState, {getFirebase})=>{
        let firebase = getFirebase()
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user)=>{
                console.log(user)
            })
            .catch((e)=>{
                console.log(e)
            })
    }
}

export const signOut=()=>{
    return (dispatch, getState, {getFirebase})=>{
        let firebase = getFirebase()
        firebase
            .auth()
            .signOut()
            .then((user)=>{
                console.log(user)
            })
            .catch((e)=>{
                console.log(e)
            })
    }
}


export const authenticateWithGoogle=()=>{
    return (dispatch, getState, {getFirebase})=>{
        let firebase = getFirebase()
        const provider  = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((user)=>{
                console.log(user)
            })
            .catch((e)=>{
                console.log(e)
            })
    }
}