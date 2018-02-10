import React from 'react'
import { connect } from 'react-redux'

import Stories from './Stories';
import SearchBar from './SearchBar';
import CurrentStory from './CurrentStory';
import Loading from './Loading';

class App extends React.Component {
    render() {
        if(this.props.loading) {
            return <Loading />
        }
        if(this.props.error) {
            return <span>{this.props.error}</span>
        }
        if(this.props.currentStory) {
            return <div>
                <CurrentStory />
            </div>
        }
        else {
            return <div>
                <SearchBar />
                <Stories />
            </div>
        }
    }
}

function mapStateToProps(state) {
    return {
        loading: state.stories.pending,
        error: state.stories.error,
        currentStory: state.currentStory ? true : false
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
