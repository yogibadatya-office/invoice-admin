import React from 'react';
import {Snackbar, IconButton, Icon, SnackbarContent} from '@material-ui/core';
import CIcon from '@coreui/icons-react'
import {green, amber, blue, red} from '@material-ui/core/colors';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import * as Actions from '../../../store/actions';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root   : {},    
    success: {
        backgroundColor: green[600],
        color          : '#FFFFFF'
    },
    error  : {
        backgroundColor: red[600],
        color          : '#FFFFFF'
    },
    info   : {
        backgroundColor: blue[600],
        color          : '#FFFFFF'
    },
    warning: {
        backgroundColor: amber[600],
        color          : '#FFFFFF'
    }
}));

const variantIcon = {
    success: "check_circle",
    warning: "warning",
    error  : "error_outline",
    info   : "info"
};

function FuseMessage(props)
{
    const dispatch = useDispatch();
    const state = useSelector(({fuse}) => fuse.message.state);
    const options = useSelector(({fuse}) => fuse.message.options);

    const classes = useStyles();

    return (
        <Snackbar
            {...options}
            open={state}
            onClose={() => dispatch(Actions.hideMessage())}
            classes={{
                root: classes.root
            }}
            ContentProps={{
                variant        : 'body2',
                headlineMapping: {
                    body1: 'div',
                    body2: 'div'
                }
            }}
        >
            <SnackbarContent
                className={clsx(classes[options.variant])}
                message={
                    <div className="flex items-center">
                        {variantIcon[options.variant] && (
                            <Icon className="mr-8" color="inherit">{variantIcon[options.variant]}</Icon>
                        )}
                        {options.message}
                    </div>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        height="8px"
                        onClick={() => dispatch(Actions.hideMessage())}
                    >
                        <CIcon className = "cil-shield-x"/>
                        {/* <Icon>cancel</Icon> */}
                    </IconButton>
                ]}
            />
        </Snackbar>
    );
}

export default React.memo(FuseMessage);
