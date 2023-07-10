import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders sorting component', () => {
    render(<App />);

    const alphabeticallyElement = screen.getByText(/alphabetically/i);
    expect(alphabeticallyElement).toBeInTheDocument();

    const priceElement = screen.getByText(/price/i);
    expect(priceElement).toBeInTheDocument();

    const starRatingElement = screen.getByText(/star rating/i);
    expect(starRatingElement).toBeInTheDocument();
});

test('renders holiday list', () => {
    render(<App />);

    const aguamarinaElement = screen.getByText("Aguamarina Golf Hotel");
    expect(aguamarinaElement).toBeInTheDocument();

    const iberostarElement = screen.getByText("Iberostar Grand Salome");
    expect(iberostarElement).toBeInTheDocument();

    const lasPiramidesElement = screen.getByText("Las Piramides Resort");
    expect(lasPiramidesElement).toBeInTheDocument();
});

test('order alphabetically hotels in correct order', () => {
    render(<App />);

    //tap the order alphabetically button
    const alphabeticallyElement = screen.getByText(/alphabetically/i);
    act(() => {
        fireEvent.click(alphabeticallyElement);
    });

    const holidayItems = screen.getAllByTestId("holiday-name");

    const aguamarinaElement = screen.getByText("Aguamarina Golf Hotel");

    const iberostarElement = screen.getByText("Iberostar Grand Salome");

    const lasPiramidesElement = screen.getByText("Las Piramides Resort");

    expect(holidayItems.indexOf(aguamarinaElement)).toEqual(0);
    expect(holidayItems.indexOf(iberostarElement)).toEqual(1);
    expect(holidayItems.indexOf(lasPiramidesElement)).toEqual(2);
});

test('order by price hotels in correct order', () => {
    render(<App />);

    //tap the order by price button
    const priceElement = screen.getByText(/price/i);
    act(() => {
        fireEvent.click(priceElement);
    });

    const holidayItems = screen.getAllByTestId("holiday-name");

    const aguamarinaElement = screen.getByText("Aguamarina Golf Hotel");

    const iberostarElement = screen.getByText("Iberostar Grand Salome");

    const lasPiramidesElement = screen.getByText("Las Piramides Resort");

    expect(holidayItems.indexOf(lasPiramidesElement)).toEqual(0);
    expect(holidayItems.indexOf(aguamarinaElement)).toEqual(1);
    expect(holidayItems.indexOf(iberostarElement)).toEqual(2);
});

test('order by star rating hotels in correct order', () => {
    render(<App />);

    //tap the order by star rating button
    const starElement = screen.getByText(/star rating/i);
    act(() => {
        fireEvent.click(starElement);
    });

    const holidayItems = screen.getAllByTestId("holiday-name");

    const aguamarinaElement = screen.getByText("Aguamarina Golf Hotel");

    const iberostarElement = screen.getByText("Iberostar Grand Salome");

    const lasPiramidesElement = screen.getByText("Las Piramides Resort");

    expect(holidayItems.indexOf(lasPiramidesElement)).toEqual(0);
    expect(holidayItems.indexOf(aguamarinaElement)).toEqual(1);
    expect(holidayItems.indexOf(iberostarElement)).toEqual(2);
});