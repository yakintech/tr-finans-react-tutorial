import { Button, Checkbox, TextField } from '@mui/material'
import React from 'react'

function BaseComponents() {
  return (<>
    <hr></hr>
    <Button variant='contained'>Hello</Button>
    <hr></hr>
    <TextField label='Name' variant='outlined'/>
    <hr></hr>
    <Checkbox/>
  </>
  )
}

export default BaseComponents