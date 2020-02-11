let initalState = [
    {accountName:"Joseph",
    accountNumber:"34455545", 
    bankName: "Bank", bankBranch:
     "Acccra"
    },
    {accountName:"The manager",
    accountNumber:"000000000", 
    bankName: "The Bank", bankBranch:
     "The Branch"
    },
]

export default function(state = initalState, action){
    switch(action.type){
        case "ADD_ACCOUNT":
            return [...state, action.payload]
        default:
            return state;
    }
}