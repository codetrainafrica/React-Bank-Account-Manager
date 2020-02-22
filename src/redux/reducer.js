let initialState = [
    {
        accountName: "Davinci",
        accountNumber:"00000000",
        bankName:"Rome Community Bank",
        bankBranch:"Rome Junction",
        id:"2343"
    },

    {
        accountName: "Pablo",
        accountNumber:"111111111",
        bankName:"Mexico National Bank",
        bankBranch:"Escoba Junction",
        id:"54645"
    }
]


export default (state = initialState, action)=>{
    switch(action.type){
        case "ADD_ACCOUNT":
            console.log('add')
            return [...state, action.payload]

        case "DELETE_ACCOUNT":
             return state.filter((account)=>{
                 return account.id!==action.payload
             })
        case "EDIT_ACCOUNT":
            return state.map(account=>{
                if(account.id===action.payload.id)
                    return action.payload;
                return account;

            })
        default:
            return state;
    }
}