import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridSystem = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
        column 1
      </Grid.Column>
      <Grid.Column>
        column 2
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
      column 1
      </Grid.Column>
      <Grid.Column>
        column 2
      </Grid.Column>
      <Grid.Column>
        column 3
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridSystem 
