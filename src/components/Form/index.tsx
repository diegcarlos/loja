import { Children, cloneElement, isValidElement, ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode[];
  onFinish?: (data: object) => void;
}

export default function Form(props: Props) {
  const { children, onFinish } = props;
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    onFinish?.(data);
  };

  const registerChild = (child: React.ReactElement) => {
    if (isValidElement(child as any) && child.props.name) {
      register(child.props.name, { required: child.props.required });
    }
  };

  const handleChildChange = (name: string, value: any, index) => {
    if (name) {
      setValue(name, value);
    } else {
      setValue(`${index}_errorName`, value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      {...props}
      className="flex flex-col gap-4 w-full"
    >
      {children &&
        Children.map(children, (child: React.ReactElement, index) => {
          registerChild(child);
          return cloneElement(child, {
            onChange: (data) => {
              return handleChildChange(
                child.props.name,
                data.target.value,
                index
              );
            },
          });
        })}
    </form>
  );
}
