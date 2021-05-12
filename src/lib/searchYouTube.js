import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      key: options.key,
      maxResults: options.max || 5,
      q: options.query,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: 'true'
    },
    contentType: 'application/json',
    success: (data) => {
      callback(data);
    },
    error: (data) => {
      console.error(data);
    }
  });
};

export default searchYouTube;
