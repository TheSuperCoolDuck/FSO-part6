import React from 'react'
import  {connect} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import { createNotification} from '../reducers/notificationReducer'

const AnecdoteForm = (props) =>{
  const addAnecdotes = async (event) =>{
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value=''
    props.createAnecdote(content)
    props.createNotification(content,5000)
  }

  return(
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdotes}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </>
  )
}

export default connect(
  null,
  {createAnecdote, createNotification}
  
)(AnecdoteForm)