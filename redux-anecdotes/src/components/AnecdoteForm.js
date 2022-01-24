import React from 'react'
import  {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import { createNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () =>{
  const dispatch = useDispatch()

  const addAnecdotes = async (event) =>{
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value=''
    dispatch(createAnecdote(content))
    dispatch(createNotification(content))
    setTimeout(()=>dispatch(clearNotification()),5000)
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