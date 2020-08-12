import React from 'react'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './SearchBar.scss';

const SearchBar = (props: any) => (
    <Paper component="form" className="search-bar"
        onSubmit={props.onSubmit}>
        <InputBase 
            className="input"
            name="query"
            placeholder="Search Arxiv papers"
            onChange={props.onTextChange}
        />
        <IconButton type="submit" className="icon">
            <SearchIcon />
        </IconButton>
    </Paper>
);

export default SearchBar;