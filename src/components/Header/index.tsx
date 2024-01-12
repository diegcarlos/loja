import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  title?: ReactNode | string;
  navigate?: ReactNode;
}
export default function Header(props: Props) {
  const { children, title, navigate } = props;
  return (
    <header className="w-full h-16 bg-slate-800 flex flex-row gap-3 items-center justify-between pl-10 pr-10">
      <h1 className="text-yellow-50 text-xl whitespace-nowrap">{title}</h1>
      <div className="w-full">{children}</div>
      {navigate}
    </header>
  );
}
