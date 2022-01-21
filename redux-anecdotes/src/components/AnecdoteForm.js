import React from 'react'
import  {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import { CreateNotification, ClearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () =>{
  const dispatch = useDispatch()

  const addAnecdotes = (event) =>{
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value=''
    dispatch(createAnecdote(anecdote))
    dispatch(CreateNotification(anecdote))
    setTimeout(()=>dispatch(ClearNotification()),5000)
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

export default AnecdoteForm