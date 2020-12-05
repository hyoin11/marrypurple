import React from 'react';
import ProfileMain from '../../components/profile/ProfileMain';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateGender } from '../../modules/side'
import { logout} from '../../modules/user'

const ProfileMainContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(({ user }) => ({
        user: user.user
    }));

    const onLogout = () => {
        dispatch(logout());
        history.push('/')
    };

    const boyClick = () => {
        dispatch(updateGender({
            match_gender: 'male'
        }))
    }
    const allClick = () => {
        dispatch(updateGender({
            match_gender: 'both'
        }))
    }
    const girlClick = () => {
        dispatch(updateGender({
            match_gender: 'female'
        }))
    }

    return (
        <ProfileMain user={user} boyClick={boyClick} allClick={allClick} girlClick={girlClick} onLogout={onLogout}/>
    )
}

export default withRouter(ProfileMainContainer);