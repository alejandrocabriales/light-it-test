import { SxProps } from '@mui/material';
import Modal from '@mui/material/Modal';
import * as React from 'react';

interface Props {
    open: boolean;
    handleClose: () => void;
    children: JSX.Element;
    className?: string;
    sx?: SxProps

}
const BasicModal: React.FC<Props> = ({ children, handleClose, open, className, sx }) => (
    <div className={className}>
        <Modal
            sx={sx}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={className}>{children}</div>
        </Modal>
    </div>
);
export default BasicModal;
