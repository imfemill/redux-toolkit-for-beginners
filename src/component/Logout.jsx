import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/reducers/authSlice';

const Logout = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const handleLogout = () => {
        dispatch(signOut());
    };

    return (
        <div>
            <h1>Hello 👋, Welcome Back!</h1>
            <div>username : {user?.username}</div>
            <div>password : {user?.password}</div>
            <br />
            <br />
            <button onClick={handleLogout} className="btn">Sign Out</button>
        </div>
    )
}

export default Logout