import { Grid } from '@mui/material'
import React from 'react'

function GridSample() {
  return (<>
    <Grid direction='column' container spacing={2}>

    <Grid item xs={6} sm={3}>
        Box-1
    </Grid>

    <Grid item xs={6} sm={3}>
        Box-2
    </Grid>

    <Grid item xs={6} sm={3}>
        Box-3
    </Grid>

    <Grid item xs={6} sm={3}>
        Box-4
    </Grid>

    <Grid item xs={6} sm={3}>
        Box-5
    </Grid>

    </Grid>
  </>
  )
}

export default GridSample