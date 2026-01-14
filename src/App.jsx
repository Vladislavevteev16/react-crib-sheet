import { Routes, Route } from "react-router";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TopicsPage } from "./pages/TopicsPage";
import { TopicContent } from "./components/TopicContent";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="topics" element={<TopicsPage />}>
            <Route index element={<TopicContent />} />
            <Route path=":id" element={<TopicContent />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
