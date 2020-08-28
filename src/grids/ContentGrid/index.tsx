import React from 'react';

import Grid from '@material-ui/core/Grid';

import ResultList from '../../components/ResultList';
import WordCloud from '../../components/WordCloud';

import './ContentGrid.scss'

const ContentGrid = (props: any) => (

    <Grid 
        className="content-grid"
        container 
        spacing={5}
        direction="row"
        style = {{ width: "90%", margin: "auto" }}
    >
        
        <Grid item lg={9}>
            {props.isLoading && "Loading..."}
            <ResultList 
                onPageChange = {props.onPageChange}
                currentMax = {props.results.length}
                currentResults = {props.currentResults}
                currentStart = {props.currentStart}/>
        </Grid>
        <Grid item lg={3}>
            {props.isLoading && "Loading..."}
            <WordCloud
                rankings = {props.analyses.word_rankings}/>
        </Grid>
    </Grid>
);


export default ContentGrid;