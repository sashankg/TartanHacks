import React from 'react'
import { connect } from 'react-redux'

class StoryPart extends React.Component {
    render() {
        var color;
        if(this.props.sentiment == 'Positive') {
            color = '#2ed573';
        }
        else if(this.props.sentiment == 'Negative') {
            color = '#ff6348';
        }
        else {
            color = '#a4b0be';
        }
        return <a className="storyPart" href={this.props.source}>
            <div className="heading">
                <h2 className="headline">{ this.props.headline }</h2>
                <h3 className="author">{ this.props.author }</h3>
            </div>
            <div class="content">
                <img className="image" src={ this.props.image } alt="" />
                <p className="summary">{ this.props.text }</p>
            </div>
            <div className="space" />
            <div className="sentiment" style={{ backgroundColor: color }}/>
        </a>
    }
}

function mapStateToProps(state, props) {
    return state.currentStory.parts[props.index]
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StoryPart)
