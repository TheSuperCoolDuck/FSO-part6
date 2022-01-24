const notificationReducer = (state='', action)=>{
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

export const voteNotification = (anecdote, timeout, timeoutId) => {
  return async dispatch=>{
    clearTimeout(timeoutId)
    timeoutId = setTimeout(()=>{
      dispatch(clearNotification())
    },timeout)
    dispatch({
      type: 'VOTE_NOTIFICATION',
      message: anecdote
    })
    dispatch({
      type: 'SET_TIMEOUTID',
      timeoutId
    })
  }
}

export const createNotification = (anecdote, timeout, timeoutId) => {
  return async dispatch=>{
    clearTimeout(timeoutId)
    timeoutId = setTimeout(()=>{
      dispatch(clearNotification())
    },timeout)
    setTimeout(()=>{
      dispatch(clearNotification())
    }, timeout)
    dispatch({
      type: 'CREATE_NOTIFICATION',
      message: anecdote
    })
    dispatch({
      type: 'SET_TIMEOUTID',
      timeoutId
    })
  }
}

export default notificationReducer