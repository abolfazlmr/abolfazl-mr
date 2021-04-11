import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Works = () => {
  const animated = useRef();
  // const [array, setArray] = useState([]);
  var array
  var counter = 0

  useEffect(() => {
    if (animated.current.childNodes) {
      // setArray(animated.current.childNodes);
      array = animated.current.childNodes
      addWork();
    }
  });

  const addWork = () => {
    removeWork()
    gsap.to(array[counter], {
      top: 0
    })
    counter++
    if (counter >= 3) {
      counter = 0
    }
    setTimeout(addWork, 3000);
  }


  const removeWork = () => {
    array.forEach((element) => {
      gsap.set(element, {
        top: -50,
      });
    });
  };

  return (
    <div ref={animated}>
      <div>developer</div>
      <div>designer</div>
      <div>freelancer</div>
    </div>
  );
};

export default Works;
