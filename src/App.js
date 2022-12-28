import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Route/Route';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <div>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route}
        ></RouterProvider>

      </QueryClientProvider>
    </div>
  );
}

export default App;
