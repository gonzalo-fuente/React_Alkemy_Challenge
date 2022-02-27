import Home from "./pages/Home";
import MenuItemSearch from "./pages/MenuItemSearch";
import Login from "./pages/Login";
import Navbar from "./components/routes/Navbar";
import MenuItemDetails from "./pages/MenuItemDetails";
import AuthProvider from "./components/auth/AuthProvider";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import NotFound from "./pages/NotFound";

/* Router */
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App pt-5">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <div className="container-md pt-4">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />

              {/* Protected Routes */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/menu-items"
                element={
                  <ProtectedRoute>
                    <MenuItemSearch />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/menu-items/:id"
                element={
                  <ProtectedRoute>
                    <MenuItemDetails />
                  </ProtectedRoute>
                }
              />

              {/* Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
