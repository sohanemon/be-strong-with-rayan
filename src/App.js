import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/auth-provider";
import { router } from "./routes/router";

function App() {
  return (
    <div className='max-w-screen-xl mx-auto font-poppins'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
