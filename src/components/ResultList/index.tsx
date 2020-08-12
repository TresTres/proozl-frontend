import React from 'react';

const ResultList = (props: any) => (

    <ul>
        {props.results.map((entry: any) => (
            <div>
                {entry.title}
            </div>
        ))}
    </ul>
);

export default ResultList;
