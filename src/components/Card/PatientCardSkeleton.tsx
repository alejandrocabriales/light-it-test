import React from 'react'
import { Container, ContainerAvatar } from './PatientCard'
import { Skeleton } from '@mui/material'

const PatientCardSkeleton = () => {
    return (
        <Container>
            <ContainerAvatar>
                <Skeleton variant="circular" width={40} height={40} />
            </ContainerAvatar>
            <Skeleton variant="text" width="80%" height={30} />
            <Skeleton variant="text" width="60%" height={30} />
            <Skeleton variant="text" width="50%" height={30} />
            <Skeleton variant="rectangular" width="100%" height={118} />
        </Container>
    )
}

export default PatientCardSkeleton
