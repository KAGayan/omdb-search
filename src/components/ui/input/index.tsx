import './index.scss';

interface Props {
  value?: string | number;
  onChange: (value: string) => void;
}

export const Input = ({ value, onChange }: Props) => {
  return (
    <input
      className={`input`}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};
