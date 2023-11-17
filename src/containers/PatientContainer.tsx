import React from 'react';
import MuiAlert from '@mui/material/Alert';
import PatientCard from '../components/Card/PatientCard';
import { usePatient } from './usePatient';
import styled from '@emotion/styled';
import PatientCardSkeleton from '../components/Card/PatientCardSkeleton';
import { Patient } from '../interface/patient';
import PatientEditModal from '../components/BasicModal/PatientEditModal';
import { IconButton, Snackbar } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const PatientContainer = () => {
    const {
        isLoading,
        patients,
        patientsSkeleton,
        handleOpenModal,
        handleEditPatient,
        selectedPatient,
        isModalOpen,
        handleOnSavePatient,
        handleSnackbarClose,
        snackbarOpen,
        handleCloseModal
    } = usePatient();

    if (isLoading) {
        return (
            <CardsContainer>
                {patientsSkeleton.map((_, index) => {
                    return (
                        <PatientCardSkeleton key={index} />
                    )
                }
                )}
            </CardsContainer>
        )
    }

    return (
        <Container>
            <ContainerTitleButton>
                <Title>Frontend - Patient Data Management</Title>
                <IconButton onClick={handleOpenModal} disableRipple={true}>
                    <AddBoxIcon />
                </IconButton>
            </ContainerTitleButton>
            <CardsContainer>
                {patients?.map((patient: Patient) => {
                    return (<PatientCard key={patient.id} patient={patient} handleEditPatient={handleEditPatient} />)
                })}
            </CardsContainer>
            {selectedPatient && (
                <PatientEditModal
                    open={isModalOpen}
                    handleClose={handleCloseModal}
                    initialValues={selectedPatient}
                    onSave={handleOnSavePatient}
                    snackbarOpen={snackbarOpen}

                />
            )}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    Patient saved successfully!
                </MuiAlert>
            </Snackbar>
        </Container>
    )
}

export default PatientContainer

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
});

const CardsContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 32,
});
const Title = styled.h1({
    marginBottom: 32,
    marginTop: 32,
    textAlign: 'center'
})

const ContainerTitleButton = styled.div({
    display: 'flex',
    justifyContent: 'center',
    gap: 16
})