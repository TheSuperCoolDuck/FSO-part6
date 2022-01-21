import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { VoteNotification, ClearNotification } from "../reducers/notificationReducer";

const AnecdoteList = () =>{
  const dispatch=useDispatch()
  const anecdotes = useSelector(state=>state.anecdote)

  const vote = (id, anecdote) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
    dispatch(VoteNotification(anecdote))
    setTimeout(()=>dispatch(ClearNotification()),5000)
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