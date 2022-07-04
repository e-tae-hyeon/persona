import theme from "commons/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 90vw;
  max-width: 1300px;
  height: 85vh;
  margin: 0 auto;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: ${theme.layout.shadow100};
`;
