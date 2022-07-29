import React, { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormActions, useForm } from "../../contexts/FormContext";

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
        payload: 2,
      });
    }
  });

  function EmailChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  }

  function GitChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGitHub,
      payload: e.target.value,
    });
  }

  function LinkedinChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setLinkedin,
      payload: e.target.value,
    });
  }

  function Finish() {
    if (state.github !== "" && state.email !== "") {
      console.log(state);
    } else {
      alert("Preencha todos os dados!!");
    }
  }
  return (
    <S.Container>
      <p>Passo {state.currentStep}/3</p>
      <h1>{state.name}, Onde te achamos?</h1>
      <p>Preencha com seus contatos</p>
      <hr />
      <label>
        Qual o seu Email?
        <input type="text" onChange={(e) => EmailChange(e)} />
      </label>
      <label>
        Qual o seu GitHub?
        <input type="url" onChange={(e) => GitChange(e)} />
      </label>
      <label>
        Qual o seu Linkedin?
        <input type="url" onChange={(e) => LinkedinChange(e)} />
      </label>
      <button onClick={() => navigate("/step02")}>Voltar</button>
      <button onClick={() => Finish()}>Finalizar</button>
    </S.Container>
  );
};

export default FormStep02;
