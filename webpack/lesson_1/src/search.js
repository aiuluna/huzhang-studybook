import React from 'react'
import ReactDom from 'react-dom';

import './search.less'
class Search extends React.Component {
    render () {
        return <div className="search-text">search test</div>
    }
}

ReactDom.render(<Search />, document.querySelector('#app'))