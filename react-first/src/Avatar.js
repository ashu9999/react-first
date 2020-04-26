import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

const Avatar = (props) => {
    const avatararray = [
        {
            name:"Ashu", 
            work:"web dev"
        },
        {
            name:"kmr.tosh",
            work:"mob dev"
        },
        {
            name:"kumar Ash",
             work:"ios dev"
        },
        {
            name:"kepler",
            work:"devOps"
        }
    ]

    const arrayavatarcard = avatararray.map( (avatarcard, i) => {
        return < Avatarlist
            name={avatararray[i].name}
            work={avatararray[i].work} />
    })

    return(
        <div>
            <h1 className="tc">Welcome to the Avatar</h1>
            <div>{arrayavatarcard}</div>
            <button>Submit</button>
        </div>
    )
}
export default Avatar;