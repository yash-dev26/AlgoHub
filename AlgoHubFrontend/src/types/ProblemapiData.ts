import { type CodeStub } from "./Codestub.ts";

export type ProblemApiData = {
  _id: string;
  title: string;
  description: string;
  difficulty?: string;
  tags?: string[];
  codeStub?: CodeStub[];
};