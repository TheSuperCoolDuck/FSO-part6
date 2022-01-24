import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE_ANECDOTE':
      const id = action.data
      const anecdoteToChange = state.find(a=>a.id===id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes+1
      }
      return state.map(anecdote=>
        anecdote.id!==id ? anecdote: changedAnecdote
      ).slice().sort((a,b)=>a.votes-b.votes).reverse()
    default:
      return state
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch =>{
    await anecdoteService.update(anecdote.id,{...anecdote, votes: anecdote.votes+1})
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: anecdote.id,
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type:'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initalizeAnecdotes = (anecdotes) =>{
  return async dispatch=>{
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer