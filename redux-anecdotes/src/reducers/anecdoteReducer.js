
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

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

export const createAnecdote = (anecdote) => {
  return {
    type:'NEW_ANECDOTE',
    data: asObject(anecdote)
  }
}

export const initalizeAnecdotes = (anecdotes) =>{
  return{
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export default reducer