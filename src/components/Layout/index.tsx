import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
export default function Layout(props: Props) {
  const { children } = props;
  return <div className="w-full h-dvh">{children}</div>;
}
