import {ITest} from "@/entities/test";

export interface ITestSort { key: keyof ITest; order: "asc" | "desc" }
