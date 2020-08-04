import styled from 'styled-components'
import quotes from '../../images/quotes.jpg'

const Container = styled.div`
    text-align: center;
    background-image: url(${quotes});
    background-repeat: no-repeat;
    background-size: 85px;
    padding: 40px 40px 20px 40px;
    background-position-y: 20px;
    width: max-content;
    max-width: 100%;
    margin: 40px auto;

    h4 {
        font-family: Playfair Display;
        font-size: 24px;
        color: #6c6c6c;
    }

    p {
      font-size: 20px;
      font-weight: lighter;
    }

    img {
      position: absolute;
      width: 60px;
    }
`

export { Container }
