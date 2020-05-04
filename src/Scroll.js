import React from 'react'
// props, state
// CHILDREN

const Scroll = (props) => {
    return (
    <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>{props.children}</div>
    );
    // children in this case would be a CardList: implicitly discovered
}

export default Scroll;