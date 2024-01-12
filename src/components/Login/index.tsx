import Button from "../Button";
import Form from "../Form";
import Input from "../Input";

interface Props {}
export default function Login(props: Props) {
  const {} = props;
  return (
    <div className="p-36 w-full">
      <Form
        onFinish={(data) => console.log(data)}
        className="flex flex-col gap-4 w-full"
      >
        <Input name="login" label="Login" />
        <Input name="pass" label="Senha" type="password" />
        <Button typeStyle="info" type="submit" label="Entrar" />
      </Form>
    </div>
  );
}
