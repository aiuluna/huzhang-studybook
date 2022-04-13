import { useEffect, useState } from "react";

//     function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

const usePaging: () => [list: number[], next: () => void, prev: () => void] = () => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([0]);

  useEffect(() => {
    setList((list) => list.concat([page]))
  }, [page])

  const next = () => setPage(e => e + 1)
  const prev = () => setPage(e => Math.max(0, e - 1))

  return [list, next, prev]
}
export default usePaging;