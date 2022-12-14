import styled from "styled-components";

export const container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  background: linear-gradient(180deg, #c2c2c2, #808080, #4f4f4f, #000000);
  min-height: 100vh;
`;
export const header = styled.header`
  border-bottom: 1px solid #959595;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 8px;
  margin-bottom: 20px;
`;
export const grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    width: auto;
    img {
      width: 100%;
    }
    p {
      margin: 8px;
      text-align: center;
    }
  }
`;
