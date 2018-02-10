import React from 'react'
import { connect } from 'react-redux'

class SearchBar extends React.Component {
    render() {
        return <div className="searchBar">
            <img src="images/search.svg" alt="" id="searchIcon" />
            <input id="searchInput" type="text" placeholder="Search..."/>
        </div>
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
