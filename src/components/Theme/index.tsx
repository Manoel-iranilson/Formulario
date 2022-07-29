import React, { ReactNode } from "react";
import Header from "../Header";
import SideBarItem from "../SideBarItem";
import * as S from "./styles";
import { FiUser } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { useForm } from "../../contexts/FormContext";

type Props = {
  children: ReactNode;
};

const Theme = ({ children }: Props) => {
  const { state } = useForm();
  return (
    <S.Container>
      <S.Area>
        <Header />
        <S.Steps>
          <S.SideBar>
            <SideBarItem
              title="Pessoal"
              description="se identifique"
              icon={<FiUser size={20} color="#ddd" />}
              active={state.currentStep === 0}
            />
            <SideBarItem
              title="Profissional"
              description="seu nivel"
              icon={<FaUserGraduate size={20} color="#ddd" />}
              active={state.currentStep === 1}
            />
            <SideBarItem
              title="Contatos"
              description="Como te achar"
              icon={<TiContacts size={20} color="#ddd" />}
              active={state.currentStep === 2}
            />
          </S.SideBar>
          <S.Page>{children}</S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
};

export default Theme;
