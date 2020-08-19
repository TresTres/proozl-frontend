import React, { Component } from 'react';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './ResultEntry.scss';

class ResultEntry extends Component<any> {



    render() {

        const pdfLink = this.props.entryInfo.links[1].href
        return (
            <Grid item lg={6} className="result-item">
                <Card 
                    variant="outlined" 
                    className="result-card"
                    style={{ backgroundColor: "#78909c", color: "whitesmoke"}}>
                    <CardActionArea 
                        component="a" 
                        href={pdfLink}
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
                                    {this.props.entryInfo.summary}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    }
}



export default ResultEntry;