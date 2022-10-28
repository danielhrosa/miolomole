import React from 'react';
import { buttonList } from 'suneditor-react'
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const MyComponent = (props) => {
  function handleChange(content){
    console.log(content); //Get Content Inside Editor
  }

  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor onChange={handleChange} setOption={{
        buttonList: buttonList.formatting
      }} />
    </div>
  );
};
export default MyComponent;