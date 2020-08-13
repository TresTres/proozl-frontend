import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Grid from '@material-ui/core/Grid';

import ResultEntry from '../ResultEntry';

import './ResultList.scss';

declare var MathJax: any;

class ResultList extends Component<any> {


    componentDidUpdate(){
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, ReactDOM.findDOMNode(this)]);
    }


    render() {
        return (
            <div className="result-area">
                <Grid container spacing={4} justify="flex-start">
                    {this.props.results.map((entry: any) => (
                        <ResultEntry entryInfo={entry} />
                    ))} 
                </Grid>
            </div>
        );
    }
}

export default ResultList;
