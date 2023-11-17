import styled from '@emotion/styled';
import React from 'react';

interface ContainerProps extends React.PropsWithChildren {
    className?: string;
}

const MainContainer: React.FC<ContainerProps> = ({ children, className }) => (
    <ContainerStyled className={className}>{children}</ContainerStyled>
);

export default MainContainer;

const ContainerStyled = styled.div({
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    maxWidth: '100%',

    '@media (min-width: 768px)': {
        paddingLeft: 32,
        paddingRight: 32,
    },

    '@media (min-width: 1280px)': {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 0,
        paddingRight: 0,
        maxWidth: 1184,
    },

    '@media (min-width: 1440px)': {
        maxWidth: 1312,
    },
});
