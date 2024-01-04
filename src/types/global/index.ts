import { NavigateFunction } from "react-router";

export interface IDataN <T> {
    navigate: NavigateFunction,
    data: T,
}