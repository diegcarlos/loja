interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  typeStyle?: "success" | "info" | "danger" | "default";
}
export default function Button(props: Props) {
  const { label = "", type = "button", typeStyle = "default" } = props;

  let className = "";

  switch (typeStyle) {
    case "default":
      className =
        "bg-transparent border-slate-400 hover:border-slate-500 hover:text-slate-500";
      break;
    case "success":
      className = "bg-green-600 hover:bg-green-600/90 text-white";
      break;
    case "danger":
      className = "bg-red-600 hover:bg-red-600/90 text-white";
      break;
    case "info":
      className = "bg-blue-600 hover:bg-blue-600/90 text-white";
      break;
    default:
      break;
  }

  return (
    <button
      {...props}
      type={type}
      className={`rounded-md border-2 border-solid p-2 transition ${className}`}
    >
      {label}
    </button>
  );
}
