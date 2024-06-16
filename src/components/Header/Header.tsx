import Logo from "../Logo/Logo";

type HeaderProps = {
  handleClick: () => void;
}

const Header = ({ handleClick}: HeaderProps) => {
  return (
    <div onClick={handleClick}>
      <Logo />
    </div>
  );
}

export default Header;