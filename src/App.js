import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/auth-provider";
import { router } from "./routes/router";

function App() {
  return (
    <div className='max-w-screen-xl mx-auto font-poppins'>
      <Toaster />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
