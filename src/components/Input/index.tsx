interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export default function Input(props: Props) {
  const { label = "", type = "text" } = props;
  return (
    <div className="w-full">
      <label htmlFor={label}>{label}</label>
      <input
        {...props}
        className="rounded-md w-full border-2 border-slate-400 border-solid bg-slate-100 active:border-none focus:border-none p-1"
        type={type}
        id={label}
      />
    </div>
  );
}
