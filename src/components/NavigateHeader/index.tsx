import { FaCartShopping, FaUser } from "react-icons/fa6";

interface Props {
  onClickLogin?: () => void;
  onClickCar?: () => void;
}
export default function NavigateHeader(props: Props) {
  const { onClickCar, onClickLogin } = props;
  return (
    <nav className="text-yellow-50 text-xl flex gap-4">
      <button
        onClick={onClickLogin}
        className="flex gap-1 items-center hover:text-yellow-600 transition"
      >
        Login <FaUser />
      </button>
      <button
        onClick={onClickCar}
        className="flex gap-1 items-center hover:text-yellow-600 transition"
      >
        Carrinho
        <FaCartShopping />
      </button>
    </nav>
  );
}
