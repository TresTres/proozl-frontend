import React, { Component } from 'react';


import SearchBar from '../../components/SearchBar';
import { fetchRequest } from '../../utils/apihelper';
import { environment } from '../../environment';

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
                    results: resbody.body
                })
            })
            .catch((err: any) => {
                console.log(err);
            });
        
    };
    


    render () {
        console.log(this.state);
        return (
            <div> 
                <SearchBar 
                    onSubmit={this.searchArxiv.bind(this)}
                    onTextChange={this.handleTextChange.bind(this)}
                />
            </div>
        );
    }
};

export default SearchGrid;
