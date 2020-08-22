import React, { useRef, useState, useEffect} from 'react';

const useHover = () => {
  const [hovered, setHover] = useState(false);
  const myRef = useRef(null);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect(() => {
   const node = myRef.current; 
   if (node) {
     //attach eventListeners
     node.addEventListener('mouseover', handleMouseOver);
     node.addEventListener('mouseout', handleMouseOut);
   }
    // on dismount disattach
    return () => {
      node.removeEventListener('mouseover', handlemOuseOver);
      node.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return [myRef, hovered];
};


export default useHover;