import { render, cleanup } from '@testing-library/react';
import { Button } from 'components/ui';

afterEach(cleanup);

describe('Button', () => {
  describe('render', () => {
    it('should have Button text', () => {
      const { getByText } = render(<Button label="Button" />);
      const button = getByText('Button');
      expect(button).toHaveTextContent('Button');
    });
  });
});
