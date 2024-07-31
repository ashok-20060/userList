import { useState } from "react";

const useLoader = () => {
  const [loading, setIsLoading] = useState(true);
  const setLoading = () => setIsLoading(true);
  const setLoaded = () => setIsLoading(false);
  return {
    loading,
    setLoading,
    setLoaded,
  };
};

export default useLoader;
