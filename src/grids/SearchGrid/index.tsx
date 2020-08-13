import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SearchBar from '../../components/SearchBar';
import ResultList from '../../components/ResultList';

import { fetchRequest } from '../../utils/apihelper';
import { environment } from '../../environment';

import './SearchGrid.scss'

class SearchGrid extends Component {

    state = {
        query: '',
        results: [],
        analyses: {} 
    };
    
    baseURL: string = environment.baseURL;

    handleTextChange = (inp: any) => {
        
        this.setState({
            [inp.target.name]: inp.target.value
        })
    };

    searchArxiv = (event: any) => {

        event.preventDefault();
        const eventBody: object  = {
            query: this.state.query,
            max_results: 50,
            start: 0
        };
        
        
        fetchRequest(eventBody, this.baseURL + 'search')
            .then((res: any) => {
			    if (res.status !== 200) {
				    throw new Error('Failed');
			    }
			    return res.json();
		    })
            .then((resbody: any) => {
                this.setState({
                    results: JSON.parse(resbody.body)
                })
            })
            .catch((err: any) => {
                console.log(err);
            });
        
    };
    
    //@ts-ignore
    shouldComponentUpdate( nextProps, nextState: any) {
        return nextState.results !== this.state.results;
    }


    render () {
        return (
            <div className="search-content"> 
                <div className="site-title">
                    <Typography gutterBottom>
                        <Box letterSpacing=".25em" fontSize="8em">
                            Proozl
                        </Box>
                    </Typography>
                </div>
                <SearchBar 
                    onSubmit={this.searchArxiv.bind(this)}
                    onTextChange={this.handleTextChange.bind(this)}
                />
                <ResultList
                    results={this.state.results}
                />
            </div>
        );
    }
};

export default SearchGrid;
