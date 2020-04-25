import React from 'react';
import Avatar from './Avatar';

const Avatarlist = (props) => {
    return(
        <div className="avatarstyle ma4 bg-light-purple dib pa4 tc">
            <img src={`https://joeschmoe.io/api/v1/male/${props.name}`} alt="ashu"></img>
            <h1 className="">{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default Avatarlist;