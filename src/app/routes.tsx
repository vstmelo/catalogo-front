import React from "react";
import { Route, Routes as RouteContainer } from "react-router-dom";
const Home = React.lazy(() => import("../container/Home"));

export function Routes(): JSX.Element {
  return (
    <React.Suspense fallback="Carregando">
      <RouteContainer>
        <Route path="/" element={<Home />} />
      </RouteContainer>
    </React.Suspense>
  );
}

