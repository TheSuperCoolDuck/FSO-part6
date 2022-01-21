import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { voteNotification, clearNotification } from "../reducers/notificationReducer";

const AnecdoteList = () =>{
  const dispatch=useDispatch()
  const anecdotes = useSelector(({filter, anecdote})=>(
    anecdote.filter(a=>a.content.toUpperCase().includes(filter.toUpperCase()))
  ))

  const vote = (id, anecdote) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
    dispatch(voteNotification(anecdote))
    setTimeout(()=>dispatch(clearNotification()),5000)
  }

  return(
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList