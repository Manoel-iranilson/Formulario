import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectOption from "../../components/SelectOption";
import { FormActions, useForm } from "../../contexts/FormContext";
import { FaUserAlt, FaUserTie, FaUserGraduate } from "react-icons/fa";

import * as S from "./styles";

const FormStep02: React.FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 1,
      });
    }
  });

  function SetLevel(level: number) {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  }

  function NextStep() {
    navigate("/step03");
  }

  return (
    <S.Container>
      <p>Passo {state.currentStep}/3</p>
      <h1>{state.name}, o que melhor descreve você?</h1>
      <p>
        Escolha a opção que melhor condiz com seu estado atual,
        profissionalmente
      </p>
      <hr />

      <SelectOption
        title="Sou Iniciante"
        description="Comecei a programar há menos de 1 ano "
        icon={<FaUserAlt color="#Fff" size={20} />}
        selected={state.level === 0}
        onClick={() => SetLevel(0)}
      />

      <SelectOption
        title="Sou intermediario"
        description="Comecei a programar há menos de 2 anos "
        icon={<FaUserTie color="#Fff" size={20} />}
        selected={state.level === 1}
        onClick={() => SetLevel(1)}
      />

      <SelectOption
        title="Sou avançado"
        description="ja programo há mais de 2 anos "
        icon={<FaUserGraduate color="#Fff" size={20} />}
        selected={state.level === 2}
        onClick={() => SetLevel(2)}
      />

      <button onClick={() => navigate("/")}>Voltar</button>
      <button onClick={() => NextStep()}>Proximo</button>
    </S.Container>
  );
};

export default FormStep02;
