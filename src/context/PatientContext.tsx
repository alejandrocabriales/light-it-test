import { PropsWithChildren, createContext, useState } from 'react';
import { Patient } from '../interface/patient';
interface PatientContextType {
    patients: Patient[];
    setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
}

export const PatientContext = createContext<PatientContextType>({
    patients: [],
    setPatients: () => { }
});
const PatientProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [patients, setPatients] = useState<Patient[]>([])

    return (
        <PatientContext.Provider value={{
            patients,
            setPatients
        }}>
            {children}
        </PatientContext.Provider>
    )
}

export default PatientProvider
