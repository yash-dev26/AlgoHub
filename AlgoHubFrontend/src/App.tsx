import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import { SocketProvider } from "./components/SocketProvider";
import ProblemList from "./pages/problemListing";
import ProblemPage from "./pages/problemPage";

const App = () => {
  return (
    <Routes>
      {/* Landing page : collapsable problem list */}
      <Route
        path="/"
        element={
          <Layout>
            <ProblemList />
          </Layout>
        }
      />

      {/* Problem page : fetches by :problemId from URL */}
      <Route
        path="/problem/:problemId"
        element={
          <SocketProvider>
            <Layout>
              <ProblemPage />
            </Layout>
          </SocketProvider>
        }
      />
    </Routes>
  );
};

export default App;