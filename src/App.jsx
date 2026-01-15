import { Routes, Route } from "react-router";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TopicsPage } from "./pages/TopicsPage";
import { TopicContent } from "./components/TopicContent";
import { NotFoundPage } from "./pages/NotFoundPage";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="topics" element={<TopicsPage />}>
            <Route path=":id" element={<TopicContent />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
