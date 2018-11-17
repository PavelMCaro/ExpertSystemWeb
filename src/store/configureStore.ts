import { combineReducers, createStore } from 'redux';
import { symptoms } from '../views/Diagnosis/symptom/state/symptoms';
const reduxDevTool = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            symptoms
        }),
        reduxDevTool
    )
    return store;
}