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
      const id = action.data.id
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

export const voteAnecdote = (id) => {
  return{
    type: 'VOTE_ANECDOTE',
    data: {id}
  }
}

export const createAnecdote = (data) => {
  return {
    type:'NEW_ANECDOTE',
    data
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