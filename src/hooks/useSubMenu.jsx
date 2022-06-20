import { useState } from 'react'


const useSubMenu = () => {
    
    const [elementAnchor, setElementAnchor] = useState(null);
    
    const handleMenu = (event) => {
        setElementAnchor(event.currentTarget);
    };
    
    const closeMenu = () => {
        setElementAnchor(null);
        console.log('test')
    };
    
    return {
        elementAnchor,
        handleMenu,
        closeMenu,
    }
}

export default useSubMenu