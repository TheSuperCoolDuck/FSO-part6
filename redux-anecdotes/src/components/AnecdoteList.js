import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { voteNotification} from "../reducers/notificationReducer";

const AnecdoteList = () =>{
  const dispatch=useDispatch()
  const anecdotes = useSelector(({filter, anecdote})=>(
    anecdote.filter(a=>a.content.toUpperCase().includes(filter.toUpperCase()))
  ))

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(voteAnecdote(anecdote))
    dispatch(voteNotification(anecdote.content,5000))
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
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList