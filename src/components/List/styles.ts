import styled from "styled-components";

type ContainerProps = {
  check:boolean;
}

export const Constainer = styled.div(({ check }: ContainerProps) => (
`

display: flex;
background-color: #8A2BE2;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
align-items: center;

input {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}

label{
  text-decoration: ${check ? 'line-through' : 'initial'};
}

`));