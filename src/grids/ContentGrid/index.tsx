import React from 'react';

import Grid from '@material-ui/core/Grid';

import ResultList from '../../components/ResultList';
import WordCloud from '../../components/WordCloud';

import './ContentGrid.scss'

const ContentGrid = (props: any) => (

    <Grid 
        container 
        spacing={5}
        direction="column" 
        className="content-grid">
        
        <Grid item>
            {props.isLoading && "Loading..."}
            <WordCloud
                rankings = {props.analyses.word_rankings}/>
        </Grid>
        <Grid item>
            {props.isLoading && "Loading..."}
            <ResultList 
                results = {props.results}/>
        </Grid>
    </Grid>
);


export default ContentGrid;