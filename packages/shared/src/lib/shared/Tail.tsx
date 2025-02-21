import { Header } from "../Header";
import { PurpleButton } from "../../Button";
import { greet } from '../../../../tools'
import React from "react";


export function Tail() {
  // greet('tail');
  return (
    <div>
      <Header />
      <h1>Tail</h1>
      <PurpleButton text="Click me" />
    </div>
  )
}