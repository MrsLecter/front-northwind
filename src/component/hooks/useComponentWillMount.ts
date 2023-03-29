import { useState, useEffect } from "react";

const useComponentWillMount = (fun: Function) => {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => setHasRendered(true), [hasRendered]);

  if (!hasRendered) {
    fun();
  }
};

export default useComponentWillMount;
