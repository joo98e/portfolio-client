import { FC, ReactNode } from "react";
import ClientProvider from "@/src/domain/global/providers/ClientProvider";

interface Props {
  children: ReactNode;
}

const layout: FC<Props> = ({ children }) => {
  return <ClientProvider>{children}</ClientProvider>;
};

export default layout;
