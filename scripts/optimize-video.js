const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

const inputPath = path.join(process.cwd(), 'public', 'TEASERRR2.mp4');
const outputPathDesktop = path.join(process.cwd(), 'public', 'TEASERRR2-optimized.mp4');
const outputPathMobile = path.join(process.cwd(), 'public', 'TEASERRR2-mobile.mp4');

// Desktop version
ffmpeg(inputPath)
  .outputOptions([
    '-c:v libx264',     // Use H.264 codec
    '-crf 28',          // Higher CRF = lower quality but smaller file
    '-preset faster',   // Faster encoding
    '-movflags +faststart', // Enable fast start for web playback
    '-an',              // Remove audio
    '-vf scale=1280:-2' // Scale width to 1280px, maintain aspect ratio
  ])
  .output(outputPathDesktop)
  .on('end', () => {
    console.log('Desktop video optimization complete!');
  })
  .on('error', (err) => {
    console.error('Desktop Error:', err);
  })
  .run();

// Mobile version (smaller size and resolution)
ffmpeg(inputPath)
  .outputOptions([
    '-c:v libx264',
    '-crf 30',          // Even higher compression for mobile
    '-preset faster',
    '-movflags +faststart',
    '-an',
    '-vf scale=640:-2'  // Scale width to 640px for mobile
  ])
  .output(outputPathMobile)
  .on('end', () => {
    console.log('Mobile video optimization complete!');
  })
  .on('error', (err) => {
    console.error('Mobile Error:', err);
  })
  .run(); 