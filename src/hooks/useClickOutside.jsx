import {useState, useCallback, useRef, useEffect} from 'react'

const useClickOutside = (clickOutside) => {
    const elementOutsideRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
          if (elementOutsideRef.current && !elementOutsideRef.current.contains(event.target)) {
            clickOutside()
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [elementOutsideRef]);

    return {
        elementOutsideRef,
    }
}

export default useClickOutside;