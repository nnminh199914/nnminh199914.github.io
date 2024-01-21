import React from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Replace with your desired icon


const CenteredBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 6px 15px #0000ff61',
  width: '300px', // Fixed width
  height: '100px', // Fixed height
  overflow: 'hidden',
});

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
  boxShadow: '0px 6px 15px #0000ff61',
  
  '& .something': {
    position: 'absolute',
    right: '5%',
    opacity: 0,
    transition: 'opacity 0.5s, right 0.5s',
  },

  '&:hover': {
    boxShadow: '0px 6px 15px #0000ff61',
    padding: '1.5rem 10.5rem 1.5rem 1.5rem',

    '& .something': {
      opacity: 1,
      right: '15%',
    },
  },
});

export const App = () => {
  return (
    <CenteredBox>
      <GradientButton>
        <span className="something">Hover</span>
        <ArrowForwardIosIcon /> {/* Replace with your desired icon */}
      </GradientButton>
    </CenteredBox>
  );
};