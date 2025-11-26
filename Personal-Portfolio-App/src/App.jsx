import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";
import Home from "./Page/Home";

const App = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      { loading ? (
        <Loader />
      ) : (
        <>
          <Home />
        </>
      )}
    </>
  );
};

export default App;
