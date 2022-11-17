import React from "react";

const Song = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.song.artistName}</td>
        <td>{props.song.trackName}</td>
        <td>{props.song.collectionName}</td>
      </tr>
    </tbody>
  );
};

export default Song;
