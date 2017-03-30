import React from 'react';
import {Spinner, Intent} from '@blueprintjs/core';

export const Loader = () => {
    return (
        <div className='loader'>
            <Spinner intent={Intent.SUCCESS} />
        </div>
    );
};