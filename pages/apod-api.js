import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import APOD from "../components/APOD-Api";

export default function apod() {
  return (
    <ContainerBlock>
      <APOD />
    </ContainerBlock>
  );
}
