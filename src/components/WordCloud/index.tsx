import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';

import Box from '@material-ui/core/Box';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import './WordCloud.scss';

class WordCloud extends Component<any> {

    //@ts-ignore
    shouldComponentUpdate( nextProps: any, _nextState: any) {
        return  (nextProps.rankings !== this.props.rankings);
    }

    render() {


        let output: any[] = [];
        if(this.props.rankings) {
            
            const raw_words: any[][] = this.props.rankings.pn10.concat(
                this.props.rankings.root10
            );
            output = raw_words.map((word_arr) => (
                { text: word_arr[0], value: word_arr[1]})
            );

        }

        return(
            <Box className="wordcloud">
                <ReactWordcloud 
                    options = {{
                        scale: 'linear',
                        spiral: 'archimedean',
                        fontSizes: [36,48],
                        rotations: 5,
                        rotationAngles: [-30,30]

                    }}
                    words = {output}/>
            </Box>
            );
    }
};

export default WordCloud;
