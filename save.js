import React from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Container
const CenteredBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px', // Fixed width
  height: '100px', // Fixed height
  overflow: 'hidden',
});

// Styled Button
const GradientButton = styled(Button)({
  fontFamily: 'Hack, monospace',
  color: '#ffffff',
  cursor: 'pointer',
  fontSize: '2em',
  padding: '1.5rem',
  border: 'none',
  transition: 'all 0.5s',
  borderRadius: '50px',
  position: 'relative',
  overflow: 'hidden',
  
  '& .something': {
    position: 'absolute',
    right: '5%',
    opacity: 0,
    transition: 'opacity 0.5s, right 0.5s',
  },

  '&:hover': {
    padding: '1.5rem 10.5rem 1.5rem 1.5rem',

    '& .something': {
      opacity: 1,
      right: '15%',
    },
  },
});

// Reusable Component
export const CustomButton = ({ children }) => {
  return (
    <CenteredBox>
      <GradientButton>
        {children}
      </GradientButton>
    </CenteredBox>
  );
};
