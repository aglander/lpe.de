/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import PageView from 'views/PageView';
 import Main from 'layouts/Main';
 import WithLayout from 'WithLayout';
 
 
 
 const PageViewTemplate = () => {
   return (
     <WithLayout
       component={PageView}
       layout={Main}
     />
   )
 };
 
 export default PageViewTemplate;
 