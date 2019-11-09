import React from 'react';
// import ReactDOM from 'react-dom';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders without crashing', () => {
  render(<App />);
});

test('it displays a few countries', async () => {
  const { getAllByText } = render(<App />);

  await waitForElement(() => getAllByText(/united states/i));
  await waitForElement(() => getAllByText(/italy/i));
  await waitForElement(() => getAllByText(/france/i));
  await waitForElement(() => getAllByText(/sweden/i));
});

test('it displays a few players names', async () => {
  const { getByText } = render(<App />);
 
  await waitForElement(() => getByText(/alex morgan/i));
  await waitForElement(() => getByText(/megan rapinoe/i));
  await waitForElement(() => getByText(/ali krieger/i));
  await waitForElement(() => getByText(/lina magull/i));
  await waitForElement(() => getByText(/tierna davidson/i));
});

test('it has "playerName" text', async () => {
  const { getAllByTestId } = render(<App />);

  await waitForElement(() => getAllByTestId("playerName"));
});

test('it has "countryName" text', async () => {
  const { getAllByTestId } = render(<App />);

  await waitForElement(() => getAllByTestId("countryName"));
});
