import "./App.css";
import { BrowserRouter, useLocation } from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import BillContextProvider from "./contexts/BillContext";
import ViewContextProvider from "./contexts/ViewContent";
import MainRoute from "./components/routing/MainRoute";
import StaffContextProvider from "./contexts/StaffContext";

function App() {
  return (
    <ViewContextProvider>
      <BrowserRouter>
        <BillContextProvider>
          <ProductContextProvider>
            <AuthContextProvider>
              <StaffContextProvider>
                <MainRoute />
              </StaffContextProvider>
            </AuthContextProvider>
          </ProductContextProvider>
        </BillContextProvider>
      </BrowserRouter>
    </ViewContextProvider>
  );
}

export default App;
