import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

export default function App() {
  const [textColor, setTextColor] = useState('');

  const generatedColor = String(randomColor());

  const divStyle = {
    backgroundColor: generatedColor,
    fontSize: '25px',
    fontFamily: 'sans-serif',
    padding: '20px',
    paddingTop: '60px',
    paddingBottom: '60px',
  };

  const Button = styled.button`
    background-color: magenta;
    color: black;
    font-size: 30px;
    padding: 60px 100px;
    cursor: pointer;
    border-radius: 20px;
    margin: 20px 0px;
  `;

  return (
    <>
      <Button
        onClick={() => {
          setTextColor(generatedColor);
        }}
      >
        generate
      </Button>
      <br />
      <br />
      <div style={divStyle}>random color {generatedColor}</div>
    </>
  );
}
