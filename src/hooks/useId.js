import { useId } from "react";
const useUniqeId = () => {
  const id = useId();
  return id;
};

export default useUniqeId;
