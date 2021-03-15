import React from 'react';
import ContactView from 'views/ContactView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';



const KontaktPage = () => {
  return (
    <WithLayout
      component={ContactView}
      layout={Main}
    />
  )
};

export default KontaktPage;