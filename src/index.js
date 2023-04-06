import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { CartProvider } from './dersler/contextSample/CartContext';
import { FavoritesProvider } from './dersler/contextSample/FavoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()



root.render(
    <QueryClientProvider client={queryClient}>
        <CartProvider>
            <FavoritesProvider>
                <BrowserRouter>
                    <App></App>
                </BrowserRouter>
            </FavoritesProvider>
        </CartProvider>
    </QueryClientProvider>
);
