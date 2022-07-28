import React, { ReactNode } from "react";
import Header from "../Header";
import * as S from "./styles";

type Props = {
  children: ReactNode;
};

const Theme = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Area>
        <Header />
        <S.Steps>
          <S.SideBar>aaaaaaaa</S.SideBar>
          <S.Page>{children}</S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
};

export default Theme;
