import { FunctionComponent } from 'react'
import '../styles/Navbar.css';

const Navbar: FunctionComponent<any> = () => {
    return (
        <div className="navbar">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
        </div>
    );
}

export default Navbar;
