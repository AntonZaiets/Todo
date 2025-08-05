import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToDo } from "./pages/ToDo/ToDo";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ToDo />
  </QueryClientProvider>
);
