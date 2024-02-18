import React, { useState } from 'react';
import Cards from './Cards';
import Form from './Form';

function Foreground() {
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const showForm = () => {
    setShow(true);
  }

  return (
    <div className='w-full h-full fixed left-0 top-0 z-4 flex gap-5 flex-wrap p-5'>
      <form onSubmit={handleSubmit}>
        <button onClick={showForm} className='px-5 py-5 bg-zinc-900 transi hover:bg-zinc-950 font-semibold text-zinc-300 rounded-lg absolute left-1/2 bottom-1/4 -translate-x-1/2'>New document</button>
      </form>
      {show && <Form setShow={setShow} />}
    </div>
  );
}

export default Foreground;
