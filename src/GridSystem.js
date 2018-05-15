import React from 'react'
import { Grid } from 'semantic-ui-react';
import ExampleCard from './ExampleCard';

const GridSystem = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={2} className="characteristics">
      <Grid.Column width={8} textAlign="center">
        <p>integrated content creator</p>
      </Grid.Column>
      <Grid.Column width={8} textAlign="center">
        <p>interactive platform developer</p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={7}>
    {this.props.examples.map(example => {
      return (
        <Grid.Column>
          <ExampleCard key={example} />
        </Grid.Column>
    )})}
    </Grid.Row>
  </Grid>
)

GridSystem.defaultProps = {
  examples: [1,2,3,4,5,6,7]
}

export default GridSystem
