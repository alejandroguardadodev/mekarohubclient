import update from 'immutability-helper' 
import { useState, useEffect, useCallback } from 'react'


const useTable = ({data, columns, onUpdate}) => {

    const [items, setItems] = useState([...data]); // COPY OF THE ORIGINAL DATA
    const resetItems = useCallback(() => { setItems([...data]) }) // UPDATE ITEMS BY CALLBACK
      
    useEffect(() => {
        resetItems()
    }, [data]) // EVERY TIME THE ORIGINAL DATA CHANGES

    // TO SHARE WITH TABLE
    const fireUpdate = () => { // GET THE UPDATE ELEMENT
        setItems((rows) => {
            onUpdate(rows)
          return rows
        })
    }
    
    const moveRow = useCallback((dragIndex, hoverIndex) => {
        setItems((prevCards) => {
            const value = update(prevCards, {
              $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, prevCards[dragIndex]],
              ],
            })
            return value;
    })}, [])

    const tableRegister = () => {
        return {
            columns,
            rows: items,
        };
    }

    const rowRegister = () => ({
        fireUpdate,
        move: moveRow
    })
    
    return {
        rowRegister,
        tableRegister
    }
}

export default useTable