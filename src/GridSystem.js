import React from 'react'
import { Grid } from 'semantic-ui-react'

const GridSystem = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
        <p className="intro">Dasha <br/> Daria</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridSystem
