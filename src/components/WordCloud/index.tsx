import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';


import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

class WordCloud extends Component<any> {
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
            <ReactWordcloud 
                options = {{
                    scale: 'linear',
                    spiral: 'archimedean',
                    fontSizes: [48,72],
                    rotations: 5,
                    rotationAngles: [-45,45]

                }}
                words = {output}/>);
    }
};

export default WordCloud;
