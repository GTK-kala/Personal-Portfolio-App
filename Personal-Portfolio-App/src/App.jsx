import Home from "./Page/Home";
import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <Home />}</>;
};

export default App;
