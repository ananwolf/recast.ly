import searchYouTube from '../lib/searchYouTube.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

// console.log(exampleVideoData)
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // videoList: [],
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  componentDidMount(video) {
    this.getYouTubeVideos('cute kittens');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    // console.log(this)
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video,

    });
  }

  // searchYouTube(options, (videos) => {
  //   this.setState({
  //     videos: videos,
  //     currentVideo: videos[0]
  //   });
  // });


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos}
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
