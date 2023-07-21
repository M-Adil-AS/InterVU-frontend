const reducer = (state,action)=>{
    if(action.type=='set toast'){
        return {...state, toast: action.payload}
    }
    throw new Error('No action type matched')
}

export default reducer