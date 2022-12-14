import { createContext, ReactNode, useContext, useReducer } from "react";

//tipagem

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1 | 2;
  email: string;
  github: string;
  linkedin: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

//

const FormContext = createContext<ContextType | undefined>(undefined);

const initialDate = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
  linkedin: "",
};

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGitHub,
  setLinkedin,
}

const FormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };

    case FormActions.setName:
      return { ...state, name: action.payload };

    case FormActions.setLevel:
      return { ...state, level: action.payload };

    case FormActions.setEmail:
      return { ...state, email: action.payload };

    case FormActions.setGitHub:
      return { ...state, github: action.payload };

    case FormActions.setLinkedin:
      return { ...state, linkedin: action.payload };
    default:
      return state;
  }
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(FormReducer, initialDate);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usadno denteo do formProvider");
  }
  return context;
};
