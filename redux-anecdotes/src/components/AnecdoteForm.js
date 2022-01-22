import React from 'react'
import  {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import { createNotification, clearNotification } from '../reducers/notificationReducer'
import anecdoteServices from '../services/anecdotes'

const AnecdoteForm = () =>{
  const dispatch = useDispatch()

  const addAnecdotes = async (event) =>{
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value=''
    const newAnecdote = await anecdoteServices.createNew(anecdote)
    dispatch(createAnecdote(newAnecdote))
    dispatch(createNotification(anecdote))
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