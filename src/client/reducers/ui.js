// @flow
import type {Action, State$Ui} from 'pnhd-types';
import InitialState from './initialState';

export default function ui(state: State$Ui = InitialState.ui, action: Action): State$Ui {
    switch (action.type) {

        case 'UI_MENU_TOGGLE': {
            return {
                ...state,
                menu: {
                    isOpen: !state.menu.isOpen,
                }
            };
        }

        case '@@INIT':
        case '@@redux/INIT':
            {
            return {
                ...state,
                appIsFetch: true
            }
        }

        case 'persist/REHYDRATE': {
            return {
                ...state,
                appIsFetch: false
            }
        }

        default:
            return state;
    }
};