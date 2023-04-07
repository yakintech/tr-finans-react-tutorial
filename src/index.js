import { configureStore } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { CartProvider } from './dersler/contextSample/CartContext';
import { FavoritesProvider } from './dersler/contextSample/FavoritesContext';
import CounterReducer from './dersler/redux/counterSlice'


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

const store = configureStore({
    reducer: CounterReducer
})

root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                <FavoritesProvider>
                    <BrowserRouter>
                        <App></App>
                    </BrowserRouter>
                </FavoritesProvider>
            </CartProvider>
        </QueryClientProvider>
    </Provider>
);
