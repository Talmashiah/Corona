import userService from '../services/userService';
import { loading, doneLoading } from './SystemActions';
import { setGrowl } from './GrowlActions';
import history from '../history';

export function updateForm(isValid, form) {
    return dispatch => {
        try {
            dispatch(_updateForm(isValid, form));
        } catch (err) {
            console.log('userActions: err in update form', err);
        }
    };
}

function _updateForm(isValid, form) {
    return {
        type: 'UPDATE_FORM',
        isValid,
        form
    };
}

export function login(userCreds) {
    return async dispatch => {
        try {
            dispatch(loading());
            const user = await userService.login(userCreds);
            dispatch(_setUser(user));
            history.push('/account/orders');
            dispatch(setGrowl('התחברת בהצלחה', 'success'));
        }
        catch (err) {
            dispatch(setGrowl(err, 'error'));
        }
        finally {
            dispatch(doneLoading());
        }
    };
}

export function signup(userCreds) {
    return async dispatch => {
        try {
            dispatch(loading());
            delete userCreds.passwordValidation;
            const user = await userService.signup(userCreds);
            dispatch(_setUser(user));
            history.push('/account/orders');
        }
        catch (err) {
            dispatch(setGrowl(err, 'error'));
        }
        finally {
            dispatch(doneLoading());
        }
    };
}

export function logout() {
    return dispatch => {
        try {
            userService.logout();
            dispatch(_setUser(null));
            history.push('/');
        }
        catch (err) {
            console.log('userActions: err in logout', err);
        }
    };
}

export function updateUser(userCreds) {
    console.log(userCreds);

    return async dispatch => {
        try {
            dispatch(loading());
            const user = await userService.update(userCreds);
            dispatch(_setUser(user));
            dispatch(setGrowl('פרטי החשבון שונו בהצלחה', 'success'));
        }
        catch (err) {
            console.log('userActions: err in update user', err);
        }
        finally {
            dispatch(doneLoading());
        }
    };
}

export function _setUser(user) {
    return {
        type: 'SET_USER',
        user
    };
}