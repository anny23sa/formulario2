
/*import React from 'react';

function SocialButton(props) {
  // Accede al icono mediante props.icon
  const { icon } = props;

  return (
    <button className={`social-button ${icon}`}>
      <i className={`fa fa-${icon}`}></i>{icon}
    </button>
  );
}

export default SocialButton;*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialButton.css'

const SocialButton = ({ icon }) => {
  let iconElement;
  

  switch (icon) {
    case 'facebook':
      iconElement = <FontAwesomeIcon icon={faFacebook} className="icon-grande"/>;
      break;
    case 'github':
      iconElement = <FontAwesomeIcon icon={faGithub} className="icon-grande"/>;
      break;
    case 'linkedin':
      iconElement = <FontAwesomeIcon icon={faLinkedin} className="icon-grande"/>;
      break;
  
    default:
      iconElement = null;
  }

  return (
    <button className={`social-button ${icon}`}>
      {iconElement}
    </button>
  );
}

export default SocialButton;
