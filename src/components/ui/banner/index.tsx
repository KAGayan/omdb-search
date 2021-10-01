import './index.scss';
interface Props {
  type?: 'message' | 'error';
  message?: string;
}

export const Banner = ({ type, message }: Props) => {
  return (
    <div className={`status ${type === 'error' ? 'error' : ''}`}>
      <p>{message}</p>
    </div>
  );
};
