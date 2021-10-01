import './index.scss';

interface Props {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: Props) => {
  return (
    <button className={`button-default`} onClick={onClick}>
      {label}
    </button>
  );
};
