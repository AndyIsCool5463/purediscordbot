const Youtube = require('simple-youtube-api');
const youtube = new Youtube('AIzaSyC6beKiffVcJIwbZ3SClIfdABhTnW1kzAg')
exports.run = (Bot, message, args) => {
if(!args[0]) return;
let parsed = args[0].split(" ")
youtube.searchVideos(parsed, 10)
  .then(results => {
    message.channel.send(`I got the top ${results.length} results! `)
    let resullol = results[0]
    console.log(resullol)
  })

};
