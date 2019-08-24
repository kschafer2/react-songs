const songListReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'Macarena', '2:30'},
    { title: 'All Star', duration: '3:15'},
    { title: 'I Want It That Way', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
