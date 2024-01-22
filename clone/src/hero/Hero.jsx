import React from 'react'

import { Grid,Stack,Button } from '@mui/material'


const Hero = () => {
  return (
    <>
    <section className='m-5'>

     <Grid container spacing={2} >
     <Grid item xs={8} md={8}>
        <div className='w-75'>
        <h1 className='' >We help growing </h1><h1 className=''>businesses grow</h1>
        <p className='fs-4 py-3'>Easy to use, simple to set up, Salesforce's all-in-one CRM platform is taking businesses in India to the next level. See how we can help foster more love, trust, and loyalty for you and your customers.</p>
        </div>

        <Stack spacing={2} direction="row" className='py-3'>
      <Button variant="contained" className='p-3'>Discover More</Button>
      <Button variant="outlined" className='p-3'>Watch Video</Button>
    </Stack>

  </Grid>

  <Grid item xs={4} md={4}>
    <img src="hero.png" alt="" className='w-75' />
  </Grid>
        </Grid> 
        </section>

    </>
  )
}

export default Hero
