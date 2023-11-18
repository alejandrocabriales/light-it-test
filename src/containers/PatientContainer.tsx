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
import MainContainer from '../components/MainContainer/MainContainer';

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
        <MainContainer>
            <ContainerTitleButton>
                <Title>Frontend - Patient Data Management</Title>
                <IconButtonStyled onClick={handleOpenModal} disableRipple={true}>
                    <AddBoxIcon />
                </IconButtonStyled>
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
        </MainContainer>
    )
}

export default PatientContainer

const CardsContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 16,
    marginLeft: 16,
    marginRight: 16,
    '@media (min-width: 375px)': {
        gap: 32,
        marginLeft: 'revert',
        marginRight: 'revert'
    },
});
const Title = styled.h1({
    marginBottom: 32,
    marginTop: 32,
    fontSize: 24,
    textAlign: 'center',
    '@media (min-width: 834px)': {
        fontSize: 32,
    },
})

const ContainerTitleButton = styled.div({
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    marginLeft: 8,
    marginRight: 8,
    '@media (min-width: 834px)': {
        gap: 8,
        marginLeft: 'revert',
        marginRight: 'revert'
    },
})

const IconButtonStyled = styled(IconButton)({
    '@media (min-width: 834px)': {
        marginTop: 5,
    },
})