import styled from "@emotion/styled";

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-heigth: 24px;
`;
const InputEstilizado = styled.input`
  display: block;
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.s};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid;
  border-radius: ${(props) => props.theme.spacing.s};
  border-color: ${(props) => props.theme.colors.neutral.a};
  height: 40px;
  font-height: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const CampoTexto = ({ titulo }) => {
  return (
    <LabelEstilizada>
      {titulo}
      <InputEstilizado />
    </LabelEstilizada>
  );
};
