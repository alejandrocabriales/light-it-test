import React, { useState } from 'react';
import { Patient } from '../../interface/patient';
import { Avatar, Collapse, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import Button from '../Button/Button';
import { convertToReadableDate } from '../../utils/utils';
import BorderColorIcon from '@mui/icons-material/BorderColor';

interface Props {
  patient: Patient;
  handleEditPatient: (id: string) => () => void
}

const PatientCard: React.FC<Props> = ({
  patient,
  handleEditPatient
}) => {
  const [aditionalInformation, setAditionalInformation] = useState(false);
  const handleOnClick = () => {
    setAditionalInformation(!aditionalInformation)
  }

  const renderAvatarContent = () => {
    if (patient.avatar) {
      return <Avatar alt={patient.name} src={patient.avatar} sx={{ width: 48, height: 48 }} />;
    } else {
      return <Avatar sx={{ width: 48, height: 48 }}>{patient.name.substring(0, 2)}</Avatar>;
    }
  };

  return (
    <Container>
      <ContainerAvatar>{renderAvatarContent()}</ContainerAvatar>
      <RowInformation>
        <Label>Name:</Label>
        <Name>{patient.name}</Name>
        <EditIconContainer>
          <IconButton onClick={handleEditPatient(patient.id)} >
            <BorderColorIcon color='primary' />
          </IconButton>
        </EditIconContainer>
      </RowInformation>
      <RowInformation>
        <Label>Website:</Label>
        <Website href={patient.website}>{patient.website}</Website>
      </RowInformation>
      <RowInformation>
        <Label>Creation date:</Label>
        <Date>{convertToReadableDate(patient.createdAt)}</Date>
      </RowInformation>
      <Collapse in={aditionalInformation}>
        <Description>{patient.description}</Description>
      </Collapse>
      <ContainerButton>
        <Button label={`${aditionalInformation ? 'Less' : 'More'} details`} handleOnClick={handleOnClick} buttonType={aditionalInformation ? 'secondary' : 'primary'} />
      </ContainerButton>

    </Container>
  );
};

export default PatientCard;

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  background: '#FFFFFF',
  borderRadius: 6,
  boxShadow: '0px 20px 40px rgba(219, 227, 237, 0.4), 0px 1px 3px rgba(190, 190, 190, 0.25)',
  width: '100%',
  padding: 16,
  position: 'relative',
  '@media (min-width: 375px)': {
    width: 300,
  },
});

export const ContainerAvatar = styled.div({
  display: 'flex',
  alignSelf: 'center',

});
const Name = styled.div({
  fontSize: 16,
})

const Website = styled.a({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#000000',
  '&:hover': {
    overflow: 'visible',
    whiteSpace: 'normal',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    padding: '0 4px',
  }
});

const Date = styled.div({})
const Description = styled.div({
  fontSize: 12
});

const Label = styled.div({
  fontSize: 16
})

const RowInformation = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 4
})

const ContainerButton = styled.div({

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end'
});

const EditIconContainer = styled.div({
  position: 'absolute',
  top: 6,
  right: 6,
})
