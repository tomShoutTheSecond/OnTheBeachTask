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

test('all overviews are hidden by default', () => {
    render(<App />);

    const overviewElements = screen.getAllByTestId("overview");
    for(let i = 0; i < overviewElements.length; i++)
    {
        expect(overviewElements[i]).toHaveStyle({ display: "none" });
    }
});

test('tap read more overview does appear', () => {
    render(<App />);

    //tap the read more button
    const readMoreButton = screen.getAllByText(/read more/i)[0];
    act(() => {
        fireEvent.click(readMoreButton);
    });

    const overviewElement = screen.getByText(/Welcome to Las Piramides Resort/i);
    expect(overviewElement.parentElement).toHaveStyle({ display: "block" });
});

test('tap open read more overview does hide', () => {
    render(<App />);

    //tap the read more button
    const readMoreButton = screen.getAllByText(/read more/i)[0];
    act(() => {
        fireEvent.click(readMoreButton);
    });

    //overview appears

    //tap again
    act(() => {
        fireEvent.click(readMoreButton);
    });

    //check that the overview hides
    const overviewElement = screen.getByText(/Welcome to Las Piramides Resort/i);
    expect(overviewElement.parentElement).toHaveStyle({ display: "none" });
});

test('tap read more previous overview is hidden', () => {
    render(<App />);

    //tap the first read more button
    const readMoreButtonOne = screen.getAllByText(/read more/i)[0];
    act(() => {
        fireEvent.click(readMoreButtonOne);
    });

    //overview appears for the first holiday

    //tap the second read more button
    const readMoreButtonTwo = screen.getAllByText(/read more/i)[1];
    act(() => {
        fireEvent.click(readMoreButtonTwo);
    });

    //check the first overview gets hidden
    const overviewElement = screen.getByText(/Welcome to Las Piramides Resort/i);
    expect(overviewElement.parentElement).toHaveStyle({ display: "none" });
});

test('reorder holidays overviews do hide', () => {
    render(<App />);

    //tap the first read more button
    const readMoreButtonOne = screen.getAllByText(/read more/i)[0];
    act(() => {
        fireEvent.click(readMoreButtonOne);
    });

    //overview appears for the first holiday

    //tap the order by price button
    const priceElement = screen.getByText(/price/i);
    act(() => {
        fireEvent.click(priceElement);
    });

    //check all overviews get hidden
    const overviewElements = screen.getAllByTestId("overview");
    for(let i = 0; i < overviewElements.length; i++)
    {
        expect(overviewElements[i]).toHaveStyle({ display: "none" });
    }
});