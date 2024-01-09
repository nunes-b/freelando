import styled from "@emotion/styled";

export const Rodape = styled.footer`
  background: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.white};
`;
