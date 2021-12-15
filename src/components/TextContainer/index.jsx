import React from 'react';
import Logo from '../Logo'

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users, room }) => (
  <div className="textContainer">
    <div>
      <Logo/>
    </div>
    {users ? (
      <div>
        <h1>Members on <span className='primary'>{room}</span></h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;