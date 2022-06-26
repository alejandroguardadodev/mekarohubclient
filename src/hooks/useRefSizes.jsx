import { useState, useEffect } from "react";

const useRefSizes = (ref) => {
    const [width, setWidth] = useState(1)

    useEffect(() => {
        if (ref.current) setWidth(ref.current.offsetWidth - 30);
        console.log(ref.current)
    }, [])

    return {
        width,
    }
}

export default useRefSizes;