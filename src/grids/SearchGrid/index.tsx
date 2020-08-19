import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import SearchBar from '../../components/SearchBar';
import ContentGrid from '../ContentGrid';

import { fetchRequest } from '../../utils/apihelper';
import { environment } from '../../environment';

import './SearchGrid.scss'

class SearchGrid extends Component {

    state = {
        query: '',
        results: [],
        analyses: {},
        isLoading: false 
    };
    
    baseURL: string = environment.baseURL;

    handleTextChange = (inp: any) => {
        
        this.setState({
            [inp.target.name]: inp.target.value
        })
    };

    searchArxiv = async (event: any) => {

        event.preventDefault();
        const eventBody: object  = {
            query: this.state.query,
            max_results: 50,
            start: 0
        };

        
        const responseParse = async (res: Response) => {
            if (res.status !== 200) {
                throw new Error('Failed');
            }
            return res.json();
        } 

        const wait = (ms: number) => {
            return new Promise((resolve: Function) => 
                setTimeout(() => resolve(), ms)
            ); 
        }

        try {
            
            this.setState({
                isLoading: true
            });
            const searchData : any = await fetchRequest(eventBody, this.baseURL + 'search')
                .then((res: Response) => responseParse(res));
            this.setState({
                results: JSON.parse(searchData.body)
            });  
            const analyzeData: any = await wait(2000)
                .then(() => fetchRequest(eventBody, this.baseURL + 'analyze'))
                .then((res: Response) => responseParse(res));
            this.setState({
                analyses: JSON.parse(analyzeData.body),
                isLoading: false
            }); 
                    

        } catch(err) {
            console.log(err);
        }
    };
    
    //@ts-ignore
    shouldComponentUpdate( nextProps, nextState: any) {
        return  (nextState.isLoading !== this.state.isLoading) || 
            (nextState.results !== this.state.results);
    }


    render () {

        return (
            <Container> 
                <Grid 
                    container
                    spacing={5}
                    direction="column"
                    className="search-content"
                    style = {{ width: "100%" }}> 
                    
                    <Grid item className="site-title">
                        <Typography gutterBottom>
                            <Box letterSpacing=".25em" fontSize="8em">
                                Proozl
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <SearchBar 
                            onSubmit={this.searchArxiv.bind(this)}
                            onTextChange={this.handleTextChange.bind(this)}
                        />
                    </Grid>
                </Grid>
                <ContentGrid {...this.state} />
            </Container>
        );
    }
};

export default SearchGrid;
