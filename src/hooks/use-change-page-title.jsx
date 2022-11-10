import { useEffect } from "react";

const useChangePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
    return () => {};
  }, [title]);
};

export default useChangePageTitle;
