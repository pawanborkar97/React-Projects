import {LOGO_URL} from "../utils/constants.js";

const Header = () => {
    return (
        <div className="header">   
            <div className="logo-container">
            <img className="logo" src = {LOGO_URL} />
            </div>
             <div className="nav-items"> 
                <ul> 
                <li>Home</li>
                <li>Aout Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>

             </div>
            </div>  
    )
};

export default Header;