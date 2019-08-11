var playlist = { RKelly: 'Remix to Ignition' }

function updatePlaylist(playlist, artist, songTitle) {
  Object.assign({}, playlist, { artist, songTitle })
}