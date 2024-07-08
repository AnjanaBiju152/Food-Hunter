import { LOGO_URL } from "../utilis/constants";

const Header = () => {
    return (
      <div className ="header">
          
          <div className="logo-container">
                  <img 
                  className={"logo" }
                  src={LOGO_URL}/>
               </div>
              <div className="nav-items">
                  <ul>
                      <li>Home</li>
                      <li>about Us</li>
                      <li>Contact Us</li>
                      <li>Cart</li>
                  </ul>
              </div>
       
          </div>
  

    );
  };

   
  export default Header;