/**
 * Created by feichongzheng on 17/10/13.
 */
import React from 'react';
import Bundle from '../../bundle/views/bundle';
import load from 'bundle-loader?lazy&name=[NavTop]!./lazy';

const NavTop = (props) => {
    return (
        <Bundle load={load}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};

export {NavTop};