import React, { useEffect } from 'react';
import ContentPanel from './../../components/ContentPanel/ContentPanel';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './../../store/actions/index';

const FrontPageContent = (props) => {
  //Get ContentPanels from server
  //for now hardcode a content panel.
  //pass in images
  const frontPageImages = useSelector((state) => state.frontPageContent);
  const dispatch = useDispatch();

  console.log(`Current Value of frontPageImages is ${frontPageImages}`);
  console.log(frontPageImages);

  useEffect(() => {
    dispatch(actions.initFrontPageContent());
  }, []);

  //const containerImages = useSelector((state) => state.containerImages)
  //conditionally render frontPageContent only when state is loaded.
  //add conditional render checks. Use fallback suspense maybe? 
  
  let contentPanels;
  if (frontPageImages) {
    contentPanels = frontPageImages.map((image, index) => {
      return (
        <ContentPanel key={`${index} + image.id`} containerImage={image.containerImage} />
      );
    });
  } else {
    //Use fallback suspense here! 
    contentPanels = <p>Now Loading Content Panels!....</p>
  }

  return (
    <section>
      {contentPanels}
    </section>
  )
};

export default FrontPageContent;