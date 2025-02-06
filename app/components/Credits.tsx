import React from 'react'

const Credits = () => {
  return (
    <div className='flex flex-col gap-2'>
      <p className="text-sm text-gray-500 flex gap-1">
          Solutions and Explanations from
          <a target="_blank" href="https://github.com/usc-cisco/philnits-vault" className="underline">philnits-vault</a>
      </p>
      <p className='text-sm text-gray-500 flex gap-1'>
        If you notice any errors, please message 
        <a target="_blank" href="https://www.facebook.com/hai.its.me.zeus.da.kewl.guy.jk/" className="underline">Zeus Elderfield</a>
      </p>
    </div>
  )
}

export default Credits
