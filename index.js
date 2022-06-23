const fs = require('fs');
const ytdl = require('ytdl-core');

const Link = 'https://youtu.be/xxWo9UO4B3A';
ytdl(Link)
  .pipe(fs.createWriteStream('Videos/video.mp4'));