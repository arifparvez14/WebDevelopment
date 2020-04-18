import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from '../Login/useAuth';


// const usePrevious = value => {
//     const prev = useRef(0);
//     useEffect( () => {
//         console.log(value);
//         prev.current = value;
//     }, [value])
//     return prev.current
// }

const Header = () => {
    // const [count, setCount] = useState(0);
    // const previous = usePrevious(count);
    //const user = useContext(userContext);
    const auth = useAuth();
    return (
        <div className="header">
            {/* <h1>Count: {count} previous: {previous}</h1>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count - 1)}>-</button> */}
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                {
                        auth.user && <span style={{color:'yellow'}}>Welcome {auth.user.name}  </span>
                        
                }
                {
                        auth.user ? <a  href="/login">Sign Out</a>
                        : <a href = "/login">Sign In</a>
                }
            </nav>
        </div>
    );
};

export default Header;