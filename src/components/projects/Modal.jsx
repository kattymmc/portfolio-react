import React from 'react'
import styled from 'styled-components'

const Modal = ({children, state, changeState}) => {
  return (
    <>
        {state &&
            <Overlay>
                <ContenedorModal>
                    {children}
                    <BotonCerrar onClick={() => changeState(false)}>X</BotonCerrar>
                </ContenedorModal>
            </Overlay>
        }
    </>
  )
}

const Overlay = styled.div `
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 99;

    display: flex;
    align-items: center;
    justify-content: center;
`

const ContenedorModal = styled.div `
    max-width: 60%;
    max-height: 80%;
    background: #fff;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 4rem;
    overflow-y: scroll;

    h3 {
        font-size: 2.5rem;
        font-family: 'Cooper Hewitt Semibold';
    }

    img {
        border-radius: 0.5rem;
    }

    &::-webkit-scrollbar {
        width: 11px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #999;
        border-radius: 10px;
        border: 3px solid #fff;
    }

    @media screen and (max-width: 600px) {
        padding: 1.5rem;
        max-width: 80%;
        max-height: 90%;
    }

`

const BotonCerrar = styled.button `
    position: absolute;
    top: 20px;
    right: 20px;

    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: var(--color-primary);

    &:hover {
        background: var(--color-bg-variant);
    }
`


export default Modal