import styled from "styled-components";

export const Header = styled.header`
  height: 12rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-family: "Arvo", serif;
    font-weight: 600;
    font-size: small;
    width: 6.5rem;

    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    padding: 5px 10px;
    margin: 6px 0px;
    transform: rotate(-1deg);
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  input {
    padding: 15px;
    margin: 0px 0px 24px 0px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    outline: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 5px 5px 0 #000, 10px 10px 0 #4a90e2;
  }

  &:focus-within label {
    transform: rotate(1.05deg);
    background-color: #4a90e2;
  }

  button {
    font-family: "Arvo", serif;
    font-weight: 600;
    font-size: small;
    width: 6.5rem;

    cursor: pointer;

    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    border: none;
    padding: 5px 10px;
    margin: 6px 0px;
    transform: rotate(-1deg);
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

export const Ul = styled.ul`
  background-color: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  li {
    background-color: #fff;
    border: 4px solid #000;
    box-shadow: 5px 5px 0 #000, 10px 10px 0 #4a90e2;

    width: 30%;
    margin: 0px 0px 24px 0px;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  li > button {
    font-family: "Arvo", serif;
    font-weight: 600;
    font-size: small;
    width: 6.5rem;

    cursor: pointer;

    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    border: none;
    padding: 5px 10px;
    margin: 6px 0px;
    transform: rotate(-1.5deg);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;
