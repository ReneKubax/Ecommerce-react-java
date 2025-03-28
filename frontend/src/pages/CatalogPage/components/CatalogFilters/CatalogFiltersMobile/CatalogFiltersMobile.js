import React, { useCallback, useState, useEffect } from 'react';

import { useWindowManager } from '@ui/WindowManager';
import { useEventCallback } from '@ui/utils';

import {
    useCatalogPageState,
    useCatalogPageSelectors,
    useCatalogPageActions
} from '@pages/CatalogPage/context';
import CatalogFiltersMobileWindow from './CatalogFiltersMobileWindow';
import getCatalogFiltersComponentById from '../getCatalogFiltersComponentById';

const CatalogFiltersMobile = () => {
    const catalogPageState = useCatalogPageState();
    const { filtersItems, selectedFilters } = useCatalogPageSelectors(catalogPageState);
    const { changeFilters } = useCatalogPageActions();

    const { isOpenWindow, closeWindow } = useWindowManager();
    const openWindow = isOpenWindow('CatalogFiltersMobileWindow');

    const [selectedFiltersState, setSelectedFiltersState] = useState({});

    const handleWindowClose = useEventCallback(() => {
        closeWindow('CatalogFiltersMobileWindow');
    });

    const handleResetAll = useEventCallback(() => {
        setSelectedFiltersState({});
    });

    const handleAccept = useCallback(() => {
        changeFilters(selectedFiltersState, false);
        handleWindowClose();
    }, [handleWindowClose, changeFilters, selectedFiltersState]);

    const handleChange = useEventCallback((id, selected) => {
        setSelectedFiltersState((prevState) => ({ ...prevState, [id]: selected }));
    }, []);

    useEffect(() => {
        if (!openWindow) {
            return () => {
                setSelectedFiltersState(selectedFilters);
            };
        }

        return undefined;
    }, [openWindow, selectedFilters]);

    const items = filtersItems.map((item) => {
        const { id } = item;
        const Component = getCatalogFiltersComponentById(id);
        const selected = selectedFiltersState[id];

        if (!Component) {
            return null;
        }

        return <Component key={id} {...item} selected={selected} mobile onChange={handleChange} />;
    });

    const disableResetAllButton = Object.keys(selectedFiltersState).length === 0;

    return (
        <CatalogFiltersMobileWindow
            open={openWindow}
            disableResetAllButton={disableResetAllButton}
            onClose={handleWindowClose}
            onResetAll={handleResetAll}
            onAccept={handleAccept}
        >
            {items}
        </CatalogFiltersMobileWindow>
    );
};

CatalogFiltersMobile.propTypes = {};

export default CatalogFiltersMobile;
