import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 20px;

  &:hover {
    cursor: pointer;
  }

  .split-play-button--title {
    font-family: Montserrat;
    background: #d0a72d;
    padding: 3px 10px;
    color: white;
    width: max-content;
    margin-right: 15px;
  }

  .split-play-button--play-icon {
    background: #d0a72d;
    padding: 3px 10px;
    color: white;
    width: max-content;
  }
`

export { Container }
