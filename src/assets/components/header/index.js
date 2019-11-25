import React, {Component} from 'react'; 
import imgOne from  '../../images/logo.png';

class Header extends Component {
    render()
    {
        return(
            <img src={imgOne} class="logo" alt="" /> 
        )
    }
}
export default Header;

