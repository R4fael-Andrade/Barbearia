import styled from "styled-components";
import userIcon from "../../assets/userIcon.svg"
import logoImg from "../../assets/icons8-barber-shop-with-the-decorative-round-lighting-48.png"
export const AsideContainer = styled.div`

  position: relative;
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
export const DataWrapper = styled.fieldset`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  color: #f0f0f0;
  border: none;

  input {
    width: 100%;
    height: 3rem;
    margin-top: .5rem;

    background: transparent;

    border: 1px solid #3E3C41;
    border-radius: .5rem;

    color: #B2AFB6;

    padding-block: .875rem;
    padding-inline: .75rem;
  }

`;

export const TimeWrapper = styled.fieldset`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  border: none;
  margin-bottom: .5rem;
  color: #f0f0f0;

  label {
    color: #98959D;
    margin-top: 1rem;
    margin-bottom: .5rem;
    font-size: .75rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .5rem;

    margin-top: .5rem;
  }
  `;

export const NameWrapper = styled.fieldset`
    margin-top: .5rem;
    margin-bottom: .5rem;
    color: #f0f0f0;
    border: none;
  `;

export const NameContainer = styled.div`
    display: flex;
    margin-top: .5rem;
    
    border: 1px solid #3E3C41;
    border-radius: .5rem;

    overflow: hidden;

    input {
      width: 100%;
      background: none;
      border: none;
      color: #B2AFB6;

      padding: .5rem;

      &:focus {
        background: none;
        border: none;
        outline: none;
      }
    }
    input:valid {
      background-color: none;
    }
  `
export const UserIcon = styled.div`
    margin: .875rem .5rem .875rem .75rem;
    width: 1.25rem;
    height: 1.25rem;

    background-image: url(${userIcon});
  `

export const SendBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-bottom: 4rem;
  padding-block: 1.3rem;

  border: none;
  border-radius: 8px;

  color: #050505;
  background-color: #B8952E;

  font: 500 .875rem/20% "Roboto", sans-serif;
`

export const Logo = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2E2C30;
  border-bottom-right-radius: .5rem;

  gap: .5rem;
  p {
    color: #B8952E;
    margin-left: 1.5rem;
    margin-block: 0.75rem;
    font: 500 1.125rem/5% "Roboto", sans-serif;
  }
  span {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1.5rem;
    margin-block: 0.75rem;

    background-image: url(${logoImg});
    background-size: cover;
  }
`