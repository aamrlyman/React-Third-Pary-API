import React from 'react';

const SongTable = (props) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Artist Name</th>
                    <th>Track Name</th>
                    <th>Collection Name</th>
                </tr>
            </thead>
            {props.mapSongs()}
        </table>
      );
}
 
export default SongTable;