import React from 'react';

import Grid from '@material-ui/core/Grid';

import ResultList from '../../components/ResultList';

import './ContentGrid.scss'

const ContentGrid = (props: any) => (

    <Grid 
        container 
        spacing={5}
        direction="column" 
        className="content-grid">
        
        <Grid item>
            {props.isLoading && "Loading..."}
        </Grid>
        <Grid item>
            {props.isLoading && "Loading..."}
            <ResultList 
                results = {props.results}/>
        </Grid>
    </Grid>
);


export default ContentGrid;