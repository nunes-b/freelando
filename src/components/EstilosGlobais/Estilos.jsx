import { Global } from "@emotion/react";

const estilos = (theme) => {
  return {
    html: {
      fontFamily: theme.fontFamily,
    },
    body: {
      margin: 0,
    },
  };
};

export const Estilos = () => {
  return <Global styles={estilos} />;
};
