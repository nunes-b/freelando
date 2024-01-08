import styled from "@emotion/styled";

export const Cabecalho = styled.header`
  background: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.spacing.m};
`;

export const Header = ({ children }) => {
  return <Cabecalho>{children}</Cabecalho>;
};
