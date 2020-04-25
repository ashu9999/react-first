import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

const Avatar = () => {
    return(
        <div>
            <h1 className="tc">Welcome to the Avatar</h1>
            <div>
                <Avatarlist id="1" name="Ashu" work="web dev" />
                <Avatarlist id="1" name="kmr.tosh" work="mob dev" />
                <Avatarlist id="1" name="kumar Ash" work="ios dev" />
                <Avatarlist id="1" name="kepler" work="devOps" />

            </div>
            <button>Submit</button>
        </div>
    )
}
export default Avatar;