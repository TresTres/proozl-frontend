import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import ResultEntry from '../ResultEntry';

import './ResultList.scss';

declare var MathJax: any;

class ResultList extends Component<any> {


    componentDidUpdate(){
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, ReactDOM.findDOMNode(this)]);
    }


    render() {
        return (
            <Box className="result-area">
                <Grid container spacing={2} justify="flex-start">
                    {this.props.results.map((entry: any) => (
                        <ResultEntry entryInfo={entry} />
                    ))} 
                </Grid>
            </Box>
        );
    }
}

export default ResultList;
