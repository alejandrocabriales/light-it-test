import React from 'react';
import { Patient } from '../../interface/patient';
import BasicModal from './BasicModal';
import styled from '@emotion/styled';
import EditOrCreatePatient from '../FormComponent/EditOrCreatePatient';

interface Props {
    open: boolean;
    handleClose: () => void
    className?: string;
    initialValues: Patient
    onSave: (patient: Patient) => void
    snackbarOpen: boolean
}

const PatientEditModal: React.FC<Props> = ({ open, handleClose, onSave, initialValues, snackbarOpen }) => {
    return (
        <Extended open={open} handleClose={handleClose}>
            <EditOrCreatePatient onSave={onSave} handleClose={handleClose} initialValues={initialValues} snackbarOpen={snackbarOpen} />
        </Extended >
    );
}

export default PatientEditModal

const Extended = styled(BasicModal)({
    position: 'absolute',
    left: '50%',
    height: 'calc(100% - 64px)',
    maxHeight: '100%',
    marginTop: 64,
    marginBottom: 0,
    transform: 'translateX(-50%)',
})