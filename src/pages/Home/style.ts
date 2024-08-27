import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #232225;

  max-width: 31rem;
  border-radius: 1.25rem;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-inline: 5rem;
  margin-top: 5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #F5F4F5;
`;

export const Descricao = styled.p`
  margin-top: .25rem;
  font-size: .875rem;
  color: #98959D;
`;
export const FormContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 21.12rem;

  margin-inline: 5rem;
`;
export const DataWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

  fieldset {
    margin-bottom: .5rem;
    color: #B2AFB6;
    border: none;
  }
  input {
    width: 100%;
    height: 3rem;

    background: transparent;

    border: 1px solid #3E3C41;
    border-radius: .5rem;

    color: #B2AFB6;

    padding-block: .875rem;
    padding-inline: .75rem;
  }

`;

export const TimeWrapper = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;

  label {
    color: #98959D;
    margin-bottom: .5rem;
    font-size: .75rem;
  }
  fieldset {
    border: none;
    margin-bottom: .5rem;
    color: #B2AFB6;
  } 

  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .5rem;

    margin-top: .5rem;
  }
  `;