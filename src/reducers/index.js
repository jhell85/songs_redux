import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Beautiful Day", duration: "4:05" },
    { title: "Kryptonite", duration: "3:15" },
    { title: "Yellow", duration: "4:23" },
    { title: "Ms. Jackson", duration: "2:36" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
