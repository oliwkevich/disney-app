import React from 'react'
import { Navigate } from 'react-router-dom'
import { Library } from '../components/Library'
import { Slider } from '../components/Slider'
import { MoviesCollection } from '../components/MoviesCollection'

export const Home = () => {


  if(!window.localStorage.getItem('TokenAPI')) {
    return <Navigate to="/login" /> 
  }


  return (
    <div>
      <Slider/>
      <Library/>
      <MoviesCollection />
    </div>
  )
}