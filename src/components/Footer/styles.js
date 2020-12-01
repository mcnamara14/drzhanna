import styled from 'styled-components'

const Container = styled.div`
    padding: 30px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #d0a72d;
    border-bottom: 1px solid #d0a72d;
    margin-bottom: 40px;

    p {
        margin-bottom: 0;
    }

    .gold-text {
        color: #d0a72d;
        margin: 0 20px;
    }

    img {
        height: 32px;
        width: 32px;
        display: inline-block;
        margin-left: 10px;
    }

    @media (max-width: 568px) {
        display: block;

        p {
            font-size: 12px;
        }
    }
`

export { Container }
