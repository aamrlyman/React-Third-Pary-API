import React, { useState, useEffect } from "react";
import axios from "axios";
import SongTable from "./Components/SongTable";
import Song from "./Components/Song";
import "./App.css";
import SearchInput from "./Components/SearchInput";

function App() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, filterSongs] = useState("");

  async function fetchSongs() {
    let response = await axios.get(
      `https://itunes.apple.com/search?term=${filteredSongs.toLowerCase()}`
    );
    setSongs(response.data.results);
  }

  function mapSongs() {
    console.log("map songs");
    return songs.map((song) => <Song key={song.trackId} song={song} />);
  }

  useEffect(() => {
    console.log("use effect");
    let mounted = true;
    if (mounted) {
      fetchSongs();
    }
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <SearchInput
        filterSongs={filterSongs}
        filteredSongs={filteredSongs}
        songs={songs}
        setSongs={setSongs}
        fetchSongs= {fetchSongs}
      />
      <SongTable mapSongs={() => mapSongs()} />
    </div>
  );
}

export default App;
