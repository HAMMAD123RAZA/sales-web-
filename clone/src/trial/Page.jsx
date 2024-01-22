import { Button, Grid } from '@mui/material'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className=' my-5 mx-auto' id='trial'>
    <Grid container spacing={5} className='py-3'>
    <Grid item md={6} >
    <h2>Try Salesforce for free. No credit card required, no software to install.
 </h2>
 <Button variant="contained" className='p-3 my-4 mx-3'>start free trail</Button>
      <Button variant="outlined" className='p-3 my-4'>See pricing</Button>
    </Grid>

<Grid item md={6} >
<img src="sec.png" alt="" className='w-75'  />
</Grid>

    </Grid>
      </div>
    </>
  )
}

export default Page
