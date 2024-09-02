import React from 'react';
import { JsonViewer } from '@textea/json-viewer';
import { Button } from 'flowbite-react';


export default function Readmib() {
  const jsonData = {
      
    } 

  return (
    <div class="self-center whitespace-nowrap bg-slate-100w-[98%] text-ml font-semibold dark:text-white">
      <h1>Visualización de JSON</h1>
      <JsonViewer value={jsonData} />
    </div>
  );
};

