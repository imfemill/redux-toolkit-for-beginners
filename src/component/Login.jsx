import { useDispatch } from 'react-redux';
import { signIn } from '../redux/reducers/authSlice';
import { useState } from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState({ username: '', password: '' });

    const handleLogin = () => {
        dispatch(signIn(auth));
    };

    return (
        <div>
            <h1>You are not logged in yet ⏳.</h1>
            <form onSubmit={handleLogin}>
                <input
                    required
                    className='btn'
                    placeholder='username'
                    type="text"
                    onChange={e => setAuth({ ...auth, username: e.target.value })}
                />
                <br />
                <input
                    required
                    className='btn'
                    placeholder='password'
                    type="password"
                    onChange={e => setAuth({ ...auth, password: e.target.value })}
                />
                <br />
                <button type='submit' className="btn">Sign In</button>
            </form>
        </div>
    )
}

export default Login