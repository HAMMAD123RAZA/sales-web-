import React from 'react'
import Content from './Content'
import { Grid } from '@mui/material'

const Paper = () => {
  return (
    <>

    <Grid container spacing={3} className='my-5'>
        <Grid item  md={4} >
        <Content img='balaji.png' /> 

        </Grid>

        <Grid item  md={4} >
        <Content img='boyce.png'/> 

        </Grid>

        <Grid item  md={4} >

     <Content img='flam.png'/> 
     </Grid>

     
     </Grid>

     <Grid container spacing={3}>
        <Grid item  md={4} >

     <Content img='razor.png'/> 
     </Grid>

     <Grid item  md={4} >

     <Content img='sectech.png' /> 

     </Grid>

     </Grid>


    </>
  )
}

export default Paper
