import { changeTheme } from '../redux/reducers/themeSlice';
import { useSelector, useDispatch } from 'react-redux';

const Theme = () => {
    const { isLight } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <span onClick={() => dispatch(changeTheme(isLight))} style={{ fontSize: '5rem', cursor: 'pointer' }}>
            {!isLight ? '☀️' : '🌑'}
        </span >
    )
}

export default Theme;