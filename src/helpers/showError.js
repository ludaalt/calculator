import { isError }  from './isError';
import { updateCalculateResultAction } from '../store/updateCalculateValue';

export const showError = (value) => {
    return (dispatch) => {
        if(isError(value)) {
            dispatch(updateCalculateResultAction('ERROR'))
        } else {
            dispatch(updateCalculateResultAction(''))
        }
    }
}