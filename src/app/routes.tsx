import React from "react";
import { Routes as RouteContainer } from "react-router-dom";


export function Routes(): JSX.Element {
  return (
    <React.Suspense fallback="Carregando">
      <RouteContainer>

      </RouteContainer>
    </React.Suspense>
  );
}
