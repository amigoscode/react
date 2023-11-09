import { useEffect, useState } from "react";

const useLifeCycleLog = (name) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    console.log(`${name} has mounted`);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log(`${name} has rendered`);
    }
    return () => console.log(`${name} has unmounted`);
  });
}

export default useLifeCycleLog