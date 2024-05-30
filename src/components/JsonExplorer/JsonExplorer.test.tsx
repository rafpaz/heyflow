import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import JsonExplorer from '@/components/JsonExplorer/JsonExplorer';

import { data } from './__constants__/sampleData';

describe('JsonExplorer', () => {
  it('renders without crashing', () => {
    const { container } = render(<JsonExplorer data={data} />);
    expect(container).toBeTruthy();
  });

  it('initial state is correct', () => {
    const { getByTestId } = render(<JsonExplorer data={data} />);
    expect((getByTestId('styledInput') as HTMLInputElement).value).toBe('');
    expect(getByTestId('styledInputLabel').innerText).toBe(undefined);
  });

  it('handleKeyClick updates state correctly', () => {
    const { getByTestId, getByText } = render(<JsonExplorer data={data} />);
    const input = getByTestId('styledInput');
    const label = getByTestId('styledInputLabel');

    fireEvent.click(getByText('city'));

    expect((input as HTMLInputElement).value).toBe('address.city');
    expect(label.innerHTML).toBe('Anytown');
  });

  it('handleKeyClick updates state correctly', () => {
    const { getByTestId } = render(<JsonExplorer data={data} />);
    const input = getByTestId('styledInput');
    const label = getByTestId('styledInputLabel');

    fireEvent.change(input, { target: { value: 'fields[0].prop' } });
    expect(label.innerHTML).toBe('iban');
  });

  it('show undefined if path does not exist', () => {
    const { getByTestId } = render(<JsonExplorer data={data} />);
    const input = getByTestId('styledInput');
    const label = getByTestId('styledInputLabel');

    fireEvent.change(input, { target: { value: 'fields[0].prop1' } });
    expect(label.innerHTML).toBe('undefined');
  });

  describe('json values', () => {
    it('correctly display number value', () => {
      const { getByTestId } = render(<JsonExplorer data={data} />);
      const input = getByTestId('styledInput');
      const label = getByTestId('styledInputLabel');

      fireEvent.change(input, { target: { value: 'age' } });
      expect(label.innerHTML).toBe('30');
    });

    it('correctly display boolean value', () => {
      const { getByTestId } = render(<JsonExplorer data={data} />);
      const input = getByTestId('styledInput');
      const label = getByTestId('styledInputLabel');

      fireEvent.change(input, { target: { value: 'hasError' } });
      expect(label.innerHTML).toBe('false');
    });

    it('correctly display date value', () => {
      const { getByTestId } = render(<JsonExplorer data={data} />);
      const input = getByTestId('styledInput');
      const label = getByTestId('styledInputLabel');

      fireEvent.change(input, { target: { value: 'date' } });
      expect(label.innerHTML).toBe('2021-10-27T07:49:14.896Z');
    });
  });
});
