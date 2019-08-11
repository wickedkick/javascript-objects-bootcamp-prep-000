var playlist = { RKelly: 'Remix to Ignition' }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return updatePlaylist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[playlist]
  return removeFromPlaylist;
}