import React from "react";
import { connect } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { voteNotification} from "../reducers/notificationReducer";

const AnecdoteList = (props) =>{
  const anecdotes = props.anecdote

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    props.voteAnecdote(anecdote, 5000, props.timeoutId)
    props.voteNotification(anecdote.content,5000, props.timeoutId)
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

const mapStateToProps = (state)=>{
  const filteredAnecdotes = state.anecdote.filter(a=>a.content.toUpperCase().includes(state.filter.toUpperCase()))
  return {
    anecdote: filteredAnecdotes,
    timeoutId: state.timeoutId 
  }
}

export default connect(
  mapStateToProps,
  {voteAnecdote, voteNotification}
)(AnecdoteList)