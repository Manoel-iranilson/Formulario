import React, { ReactElement } from "react";
import * as S from "./styles";

type props = {
  title: string;
  description: string;
  icon: ReactElement<any, any>;
  active: boolean;
};

const SideBarItem = ({ title, description, icon, active }: props) => {
  return (
    <S.Container>
      <a>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
        <S.Area active={active}>{icon}</S.Area>
        <S.Point active={active}></S.Point>
      </a>
    </S.Container>
  );
};

export default SideBarItem;
