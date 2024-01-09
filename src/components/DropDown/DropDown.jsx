import { useState } from "react";
import styled from "@emotion/styled";

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;

const BotaoEstilizado = styled.button`
  cursor: pointer;
  display: block;
  height: 40px;
  width: 100%;
  font-size: 18px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  border-radius: 18px;
  border-bottom-left-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  border-bottom-right-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  margin-top: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.s};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutral.a};
  &:focus {
    border-color: ${(props) => props.theme.colors.focus};
  }
`;

export const ListaSuspensaEstilizada = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 1;
  border: 1px solid ${(props) => props.theme.colors.neutral.a};
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top: none;
  margin: 0;
  padding: 0 ${(props) => props.theme.spacing.m};
  list-style: none;
`;

export const ItemListaSuspensaEstilizado = styled.li`
  padding: ${(props) => props.theme.spacing.xs} 0;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral.a};
  cursor: pointer;
  &:last-child {
    border: none;
  }
  color: ${(props) => (props.focoAtivo ? props.theme.colors.focus : "inherit")};
  &:hover {
    color: ${(props) => props.theme.colors.focus};
  }
`;

export const DropDown = ({ titulo, opcoes }) => {
  const [estaAberta, alternarVisibilidade] = useState(false);
  const [opcaoFocada, setOpcaoFocada] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const manipularTecladoTeclado = (event) => {
    alternarVisibilidade(true);
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setOpcaoFocada((focoAntigo) => {
          if (focoAntigo == null) {
            return 0;
          }
          if (focoAntigo === opcoes.length - 1) {
            return opcoes.length - 1;
          }
          return (focoAntigo += 1);
        });
        break;
      case "ArrowUp":
        event.preventDefault();
        setOpcaoFocada((focoAntigo) => {
          if (!focoAntigo) {
            return 0;
          }
          return (focoAntigo -= 1);
        });
        break;
      case "Enter":
        event.preventDefault();
        setOpcaoFocada(null);
        alternarVisibilidade(false);
        setOpcaoSelecionada(opcoes[opcaoFocada]);
        break;
      case "Tab":
        setOpcaoFocada(null);
        alternarVisibilidade(false);
        break;
      case "Escape":
        event.preventDefault();
        setOpcaoFocada(null);
        alternarVisibilidade(false);
        break;
      default:
        break;
    }
  };
  return (
    <LabelEstilizada>
      {titulo}
      <BotaoEstilizado
        estaAberta={estaAberta}
        onClick={() => alternarVisibilidade(!estaAberta)}
        onKeyDown={manipularTecladoTeclado}
      >
        <div>{opcaoSelecionada ? opcaoSelecionada.text : "Selecione"}</div>
        <div>
          <span>{estaAberta ? "▲" : "▼"}</span>
        </div>
      </BotaoEstilizado>
      {estaAberta && (
        <ListaSuspensaEstilizada>
          {opcoes.map((opcao, index) => (
            <ItemListaSuspensaEstilizado
              key={opcao.value}
              focoAtivo={index === opcaoFocada}
              onClick={() => setOpcaoSelecionada(opcao)}
            >
              {opcao.text}
            </ItemListaSuspensaEstilizado>
          ))}
        </ListaSuspensaEstilizada>
      )}
    </LabelEstilizada>
  );
};
