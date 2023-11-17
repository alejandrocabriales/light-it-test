import useSWR from 'swr';
import { API, DEFAULT_PATIENT } from '../constant/constant';
import { Patient } from '../interface/patient';
import { useContext, useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { PatientContext } from '../context/PatientContext';
import { fetcher } from '../utils/utils';

export const usePatient = () => {
  const { patients, setPatients } = useContext(PatientContext);

  const {
    data: apiPatients,
    error,
    isLoading,
  } = useSWR<Patient[]>(API, fetcher);

  const patientsSkeleton = new Array(10).fill(null);

  const [selectedPatient, setSelectedPatient] =
    useState<Patient>(DEFAULT_PATIENT);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(DEFAULT_PATIENT);
  };
  const handleOnSavePatient = (patient: Patient) => {
    const patientIndex = patients.findIndex((p) => p.id === patient.id);
    if (patientIndex !== -1) {
      // Update patient if alredy exist
      const updatedPatients = [...patients];
      updatedPatients[patientIndex] = patient;
      setPatients(updatedPatients);
    } else {
      // Add new patient
      const newPatient: Patient = {
        ...patient,
        createdAt: DateTime.now().toISO() || '',
        id: `${patients.length + 1}`,
      };
      console.log({ newPatient });
      setPatients([...patients, newPatient]);
    }
    setSnackbarOpen(true);
    handleCloseModal();
  };
  const handleEditPatient = (id: string) => () => {
    const findPatient = patients.find((patient: Patient) => patient.id === id);
    if (!findPatient) return DEFAULT_PATIENT;
    setSelectedPatient({
      ...findPatient,
      createdAt: DateTime.fromISO(findPatient.createdAt).toFormat('yyyy-MM-dd'),
    });
    setIsModalOpen(true);
  };
  useEffect(() => {
    if (apiPatients && patients.length === 0) {
      setPatients(apiPatients);
    }
  }, [apiPatients, patients.length, setPatients]);

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    event?.preventDefault();
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
  return {
    patients,
    isLoading,
    isError: error,
    patientsSkeleton,
    handleOpenModal,
    handleEditPatient,
    selectedPatient,
    isModalOpen,
    handleSnackbarClose,
    handleOnSavePatient,
    snackbarOpen,
    handleCloseModal,
  };
};