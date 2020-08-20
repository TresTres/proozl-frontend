import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ResultList from '../../components/ResultList';
import WordCloud from '../../components/WordCloud';

import './ContentGrid.scss'

const ContentGrid = (props: any) => (

    <Container className="content-grid" maxWidth="xl"> 
        <Grid 
            container 
            spacing={5}
            direction="row"
            style = {{ width: "100%" }}
        >
            
            <Grid item lg={9}>
                {props.isLoading && "Loading..."}
                <ResultList 
                    results = {props.results}/>
            </Grid>
            <Grid item lg={3}>
                {props.isLoading && "Loading..."}
                <WordCloud
                    rankings = {props.analyses.word_rankings}/>
            </Grid>
        </Grid>
    </Container>
);


export default ContentGrid;