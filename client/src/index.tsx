import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <div>


    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <DarkModeContextProvider>
          <AuthContextProvider>

            <App />
          </AuthContextProvider>
        </DarkModeContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode >
  </div>

);