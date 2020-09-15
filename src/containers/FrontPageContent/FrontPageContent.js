import React from 'react';
import ContentPanel from './../../components/ContentPanel/ContentPanel';
import { useSelector } from 'reat-redux';


const FrontPageContent = (props) => {
  //Get ContentPanels from server
  //for now hardcode a content panel.
  //pass in images
  return (
    <section>
      <ContentPanel />
    </section>
  )
};

export default FrontPageContent;