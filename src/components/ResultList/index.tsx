import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';

import ResultEntry from '../ResultEntry';

import './ResultList.scss';

declare var MathJax: any;

class ResultList extends Component<any> {


    componentDidUpdate(){
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, ReactDOM.findDOMNode(this)]);
    }


    render() {
        return (
            <Container className="result-area">
                <Grid container spacing={2} justify="flex-start">
                    {this.props.currentResults.map((entry: any) => (
                        <ResultEntry entryInfo={entry} />
                    ))} 
                </Grid>
                {this.props.currentMax > 10 &&
                    <Pagination 
                        count={Math.ceil(this.props.currentMax / 10)}
                        size='large'
                        className="result-pagination"
                        onChange={this.props.onPageChange} />
                }
            </Container>
        );
    }
}

export default ResultList;
