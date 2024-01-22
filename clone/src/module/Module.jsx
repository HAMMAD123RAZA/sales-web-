import React from 'react'
import Content from './Content'
import { Grid } from '@mui/material'

const Module = () => {
  return (
    <>
        <Grid container spacing={2} className='my-5'>
      <Grid item md={4}>

      <Content img='th.png' title='Salesforce Values: Quick Look'
      content='Learn how Salesforce helps your business build stronger relationships with your customers. '  />
      </Grid>

      <Grid item md={4}>
      <Content img='two.png' title='Salesforce CRM'
content='Learn how to use customer relationship management (CRM) software to grow your business.' />
</Grid>

      <Grid item md={4}>
      <Content img='onw.png' title='Sales Cloud Basics'
content='Grow your business, boost productivity, and make smart decisions with Sales Cloud.'/>
</Grid>
</Grid>
    </>
  )
}

export default Module
