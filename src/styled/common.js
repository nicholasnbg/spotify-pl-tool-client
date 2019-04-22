import styled from "styled-components";

// LAYOUT
const Column = styled.div`
  width: 33%;
`;

// BUTTONS
const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background:blue;
  font-size: 1em;
  border-radius: 10px;
`

// INPUTS

const InputGroup = styled.div`
  display: flex;
`;

const Input = styled.input`
 width: ${props => props.width};
 padding: 10px;
 font-size: 1em;
`;

export {Button, Input, InputGroup, Column}
