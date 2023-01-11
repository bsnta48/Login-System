import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import App from './App';
import "./index.css";

const domContainer = document.getElementById('root');
const root = createRoot(domContainer)

root.render(
    <StrictMode>
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/*' element={<App />} />
                </Routes>
            </AuthProvider>
        </Router>
    </StrictMode>
)
