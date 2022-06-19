import { useOutletContext } from "react-router-dom";

import GridLayout from "react-grid-layout";

import ConceptCard from "./ConceptCard";

const ConceptGrid = () => {

  const [innerContainerWidth] = useOutletContext();
 
  return (
    <GridLayout
        className="layout"
        cols={4}
        rowHeight={40}
        width={innerContainerWidth}
      >
        <div key="a" data-grid={{  x: 0, y: 0, w: 1, h: 6, maxW: 2, minH: 6, maxH: 6 }}><ConceptCard /></div>
      </GridLayout>
  )
}

export default ConceptGrid