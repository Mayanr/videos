import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] };

    // this should be an async function because you need to wait to get the results back from the API call. Do this by adding 'async' in front of the function argument and 'const response = await ' in front of your API call.
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({ videos: response.data.items })
    };
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App;