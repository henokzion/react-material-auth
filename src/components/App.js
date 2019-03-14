import React from 'react';

import Header from "./Layout/Header";

export default(props) => {
    return(
        <div>
            <Header></Header>
            {props.children}
        </div>
    )
}