import styled from '@emotion/styled'
import React from 'react'
import { ButtonType } from '../../interface/types'


interface Props {
    label: string
    handleOnClick: () => void
    buttonType: ButtonType
}

const Button: React.FC<Props> = ({ label, handleOnClick, buttonType }) => {
    return (
        <Container onClick={handleOnClick} buttonType={buttonType}>{label}</Container>
    )
}

export default Button

const Container = styled.button<{ buttonType: ButtonType }>(({ buttonType }) => ({
    width: 120,
    height: 48,
    padding: '4px 8px',
    borderRadius: 22,
    alignSelf: 'flex-end',
    cursor: 'pointer',
    border: `1px solid ${buttonType === 'secondary' ? '#D4D9E1' : 'transparent'}`,
    backgroundColor: buttonType === 'primary' ? '#1AAB9B' : 'transparent',
    color: buttonType === 'primary' ? '#FFFFFF' : '#9FAFB9',
    boxShadow: buttonType === 'primary' ? '2px 4px 7px rgba(26, 171, 155, 0.25)' : 'none'

}))