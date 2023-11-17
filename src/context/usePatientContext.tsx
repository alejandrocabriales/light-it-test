import { useContext } from 'react';
import { PatientContext } from './PatientContext';

export const usePatientContext = () => {
    const { patients, setPatients } = useContext(PatientContext);
    return { patients, setPatients };
};
