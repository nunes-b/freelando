import styled from "@emotion/styled";

const BotaoPrimarioEstilizado = styled.button`
  background: ${(props) => props.theme.colors.primary.b};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.spacing.s};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.s};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border: none;
  &:hover {
    background: ${(props) => props.theme.colors.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.dark.b};
  }
`;
const BotaoSecundarioEstilizado = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.primary.b};
  border: 2px solid ${(props) => props.theme.colors.primary.b};
  border-radius: ${(props) => props.theme.spacing.s};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.s};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.colors.dark.b};
    color: ${(props) => props.theme.colors.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.focus};
  }
`;

export const Botao = ({ children, variante = "primary" }) => {
  if (variante === "primary") {
    return <BotaoPrimarioEstilizado>{children}</BotaoPrimarioEstilizado>;
  }
  return <BotaoSecundarioEstilizado>{children}</BotaoSecundarioEstilizado>;
};
