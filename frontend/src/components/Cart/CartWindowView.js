import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { Window, WindowActions, WindowBody, WindowHeader, WindowLoadingMask } from '@ui/Window';
import { ShoppingCartIcon, ChevronLeftIcon } from '@ui/svg-icons/feather';
import { Button } from '@ui/Button';
import { useWindowManager } from '@ui/WindowManager';
import { useEventCallback, useMediaQuery } from '@ui/utils';

const windowName = 'CartWindow';

const CartWindowView = (props) => {
    const { children, loading, disableActions } = props;

    const { isOpenWindow, closeWindow } = useWindowManager();
    const fullScreen = useMediaQuery('(max-width: 576px)');
    const [displayChildren, setDisplayChildren] = useState(false);

    const handleClose = useEventCallback(() => {
        closeWindow(windowName);
    });

    const handleTransitionEntered = useEventCallback(() => {
        setDisplayChildren(true);
    });
    const handleTransitionExit = useEventCallback(() => {
        setDisplayChildren(false);
    });

    const open = isOpenWindow(windowName);

    let childrenNode = children;

    if (fullScreen) {
        childrenNode = displayChildren && children;
    }

    return (
        <Window
            open={open}
            centered
            fullScreen={fullScreen}
            maxWidth={750}
            disableRestoreFocus
            className="cart cart-window"
            transitionProps={{
                onEntered: handleTransitionEntered,
                onExit: handleTransitionExit
            }}
            onClose={handleClose}
        >
            <WindowLoadingMask open={loading} />
            <WindowHeader
                title="Cart"
                onClose={handleClose}
                renderIcon={() => <ShoppingCartIcon />}
            />
            <WindowBody className="cart-window__body">{childrenNode}</WindowBody>
            {!disableActions && (
                <WindowActions>
                    <Button
                        link
                        truncate
                        size={fullScreen ? 'large' : null}
                        icon={ChevronLeftIcon}
                        className="u-margin-r-auto"
                        onClick={handleClose}
                    >
                        Continue shopping
                    </Button>
                    <Button primary plain disabled size={fullScreen ? 'large' : null}>
                        Checkout
                    </Button>
                </WindowActions>
            )}
        </Window>
    );
};

CartWindowView.propTypes = {
    children: PropTypes.node,
    loading: PropTypes.bool,
    disableActions: PropTypes.bool
};

export default memo(CartWindowView);
