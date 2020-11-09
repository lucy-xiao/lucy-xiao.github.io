import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Section = (props: any) => {
  const title = props.title || '';
  const description = props.description || '';

  return (
      <Paper className="section" elevation={0} >
          <Grid container>
            <Grid className="section-left" item container direction="column" xs={12} >
              <Grid item className="section-title">
                {title}
              </Grid>
              <Grid item className="section-description">
                {description}
              </Grid>
              {/* <Grid item className="section-button">
                <Button variant="outlined">More Info</Button>
              </Grid> */}
            </Grid>
            {/* <Grid item container direction="row" xs={6} >
              Right
            </Grid> */}
          </Grid>
      </Paper>
  );
};

export default Section;