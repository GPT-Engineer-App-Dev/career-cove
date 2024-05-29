import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx";
import ApplyJob from "./pages/ApplyJob.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/apply-job" element={<ApplyJob />} />
      </Routes>
    </Router>
  );
}

export default App;