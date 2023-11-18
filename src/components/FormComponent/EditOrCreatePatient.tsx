import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import { Patient } from '../../interface/patient';
import styled from '@emotion/styled';
import { patientValidationSchema } from '../../utils/utils';

interface Props {
    handleClose: () => void,
    onSave: (patient: Patient) => void
    initialValues: Patient
    snackbarOpen: boolean
}
const EditOrCreatePatient: React.FC<Props> = ({ handleClose, onSave, initialValues, snackbarOpen }) => {

    const { handleSubmit, values, handleChange, errors, touched } = useFormik<Patient>({
        initialValues,
        validationSchema: patientValidationSchema,
        onSubmit: (values) => {
            onSave(values)
        },

    });

    return (
        <ContainerForm onSubmit={handleSubmit}>
            <Label>Create a new Patient</Label>
            <TextField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
            />
            <TextField
                label="Date"
                name="createdAt"
                type='Date'
                value={values.createdAt}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={touched.createdAt && Boolean(errors.createdAt)}
                helperText={touched.createdAt && errors.createdAt}
            />
            <TextField
                label="Avatar URL"
                name="avatar"
                value={values.avatar}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={touched.avatar && Boolean(errors.avatar)}
                helperText={touched.avatar && errors.avatar}
            />
            <TextField
                label="Website"
                name="website"
                value={values.website}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={touched.website && Boolean(errors.website)}
                helperText={touched.website && errors.website}
            />
            <TextField
                label="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
            />

            <ButtonSection>
                <SaveButton type="submit" variant="contained" color="success" >
                    Save
                </SaveButton>
                <CloseButton variant="contained" color="error" onClick={handleClose}>
                    Close
                </CloseButton>

            </ButtonSection>

        </ContainerForm>
    );
};


export default EditOrCreatePatient

const ContainerForm = styled.form({
    background: '#FFFFFF',
    width: 440,
    borderRadius: 16,
    padding: 16
})

const Label = styled.h2({})

const ButtonSection = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8
})
const SaveButton = styled(Button)({
    backgroundColor: '#15897B',
    '&:hover': {
        backgroundColor: '#106A5D',
    },
});

const CloseButton = styled(Button)({
    backgroundColor: '#D9534F',
    '&:hover': {
        backgroundColor: '#C12E2A',
    },
});