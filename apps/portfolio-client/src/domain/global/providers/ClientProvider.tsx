"use client";

import React, { FC, ReactNode } from "react";
import Header from "@/src/domain/global/components/organisms/Header";
import Footer from "@/src/domain/global/components/organisms/Footer";

interface Props {
  children: ReactNode;
}

const ClientProvider: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default ClientProvider;
