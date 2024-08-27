import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
`

export const Title = styled.h1`
    font-size: 24px;
    color: ${cores.gray};
    margin-bottom: 8px;
`

export const Paragrafo = styled.p`
    font-size: 16px;
    color: ${cores.gray};
`

export const DateInput = styled.input.attrs({ type: 'date' })`
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    color: #333;
` 

export const CardAgenda = styled.div`
    padding: 16px;
    border-radius: 8px;
    margin-top: 32px;
    color: ${cores.gray};
    border: 1px solid ${cores.gray};

    header {
        border-bottom: 1px solid #fff;
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 8px;
    }
    .card-content {
        display: flex;
        padding: 8px;
        margin-top: 8px; 

        span {
            font-weight: bold;
            margin-right: 16px;
        }
    }
`

export const ImageContainer = styled.div`
    display: flex;
    align-items:center;
`