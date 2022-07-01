import theme from "commons/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 540px;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: ${theme.layout.shadow100};
`;
