// This is the main javascript file that we will be working on 
const videoGrid = document.getElementById('videoGrid');
const videos = [
  { title: 'Video 1', channel: 'Channel A' },
  { title: 'Video 2', channel: 'Channel B' },
  { title: 'Video 3', channel: 'Channel C' },
  { title: 'Video 4', channel: 'Channel D' }
];
videos.forEach(video => {
  const card = document.createElement('div');
  card.className = 'video-card';
  card.innerHTML = `
    <div class="video-thumbnail"></div>
    <div class="video-title">${video.title}</div>
    <div class="video-channel">${video.channel}</div>
  `;
  videoGrid.appendChild(card);
});
