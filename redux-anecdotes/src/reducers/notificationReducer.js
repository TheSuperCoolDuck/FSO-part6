const initialState=''

const notificationReducer = (state=initialState, action)=>{
  switch(action.type){
    case 'VOTE_NOTIFICATION':
      return `you voted '${action.message}'`
    case 'CREATE_NOTIFICATION':
      return `you created '${action.message}'`
    case 'CLEAR_NOTIFICATION':
      return ''
    default:
      return state
  }
}

export const clearNotification = () =>{
  return{
    type: 'CLEAR_NOTIFICATION'
  }
}

export const voteNotification = (anecdote) => {
  
  return{
    type: 'VOTE_NOTIFICATION',
    message: anecdote
  }
}

export const createNotification = (anecdote) => {
  return{
    type: 'CREATE_NOTIFICATION',
    message: anecdote
  }
}

export default notificationReducer