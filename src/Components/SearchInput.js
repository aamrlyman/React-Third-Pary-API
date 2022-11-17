import React from 'react';

const SearchInput = (props) => {
    function handleSubmit(event){
        event.preventDefault();
        props.fetchSongs();
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type='submit'>Search</button>
            <input value={props.filteredSongs} onChange={(event) => props.filterSongs(event.target.value) } />
        </form>
      );
}
 
export default SearchInput
