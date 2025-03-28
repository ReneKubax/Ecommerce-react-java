import React, { useCallback, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from '../components/Button';
import { Modal, ModalProps } from '../components/Modal';

export default {
    title: 'PA-UI-KIT/Modal',
    component: Modal,
    argTypes: {
        open: {
            control: {
                type: null
            }
        }
    }
} as Meta;

export const Default: Story<ModalProps> = (args) => {
    const [open, setOpen] = useState(false);

    const handleShowModalClick = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const cssTranslate = React.useMemo(() => {
        const offset = Math.floor(Math.random() * 200 + 1) - 200;

        return `translate(${offset}px, ${offset}px)`;
    }, []);

    return (
        <>
            <Button primary onClick={handleShowModalClick}>
                Show Modal
            </Button>
            <Modal open={open} {...args} onClose={handleClose} onEscapeKeyDown={handleClose}>
                <div
                    style={{
                        width: 300,
                        height: 300,
                        background: '#fff',
                        padding: 50,
                        transform: cssTranslate
                    }}
                >
                    <div style={{ marginBottom: 50 }}>Modal content</div>
                    <Default {...args} />
                    <div style={{ marginTop: 50 }}>
                        <Button plain centered autoFocus onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
Default.args = {
    centered: true,
    backdrop: true,
    children: null
} as ModalProps;
