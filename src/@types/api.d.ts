export interface IApiContextProvider {
  children: React.ReactNode,
}

export interface IButtons {
  inputRef: React.RefObject<HTMLInputElement>,
  symbol?: string,
}

export type ApiContextType = {
  calculate: (userInput: string) => number,
  result: number|string,
  setResult: (result: number|string) => void,
  text: string,
  setText: (text: string) => void,
};
