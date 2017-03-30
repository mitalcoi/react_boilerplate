// @flow
import type {Action} from 'pnhd-types';

export function toggleMenu(): Action {
    return {
        type: 'UI_MENU_TOGGLE'
    }
}