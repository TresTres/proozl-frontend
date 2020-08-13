import React, { Component } from 'react';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import './ResultEntry.scss';

class ResultEntry extends Component<any> {


    render() {
        return (
            <Grid item xs={4} className="result-item">
                <Card 
                    variant="outlined" 
                    className="result-card"
                    style={{ backgroundColor: "#78909c", color: "whitesmoke"}}>
                    <CardActionArea 
                        component="a" 
                        href={this.props.entryInfo.link}
                        target="_blank">
                        <CardContent>
                            <Typography 
                                gutterBottom 
                                variant="h5" 
                                component="h2" 
                                className="result-title">
                                {this.props.entryInfo.title}
                            </Typography>
                            <Typography 
                                component="p"  
                                className="result-summary">
                                    {this.props.entryInfo.abstract}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    }
}



export default ResultEntry;