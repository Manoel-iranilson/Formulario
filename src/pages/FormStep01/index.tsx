import React, { ChangeEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm, FormActions } from "../../contexts/FormContext";
import * as S from "./styles";

const FormStep01: React.FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 0,
    });
  }, []);

  function NameChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  }

  function NextStep() {
    if (state.name == "") {
      alert("Preecha os Dados");
    } else {
      navigate("/step02");
    }
  }

  return (
    <S.Container>
      <p>Passo 1/3</p>
      <h1>Vamos começar com seu dados</h1>
      <p>Preencha todos os campos para proceguir</p>

      <hr />

      <label>
        Seu nome Completo
        <input type="text" autoFocus onChange={(e) => NameChange(e)} />
      </label>

      <button onClick={() => NextStep()}>Proximo</button>
    </S.Container>
  );
};

export default FormStep01;
