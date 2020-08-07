import styled from 'styled-components'

const Container = styled.div`
    padding: 60px 60px 30px 60px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    ul,
    p {
        margin: 0;
    }

    li {
        list-style: none;
        float: left;
        margin-left: 40px;
    }

    img {
        height: 48px;
        width: auto;

        @media (max-width: 992px) {
            height: 37px;
        }
    }

    @media (max-width: 992px) {
        padding: 60px 30px 30px 30px;
    }
`

const Navigation = styled.div`
    height: max-content;
`

export { Container, Navigation }
