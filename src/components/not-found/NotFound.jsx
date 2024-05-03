import React from 'react'

export default function NotFound({notfound}) {
  return (
    <div className='text-center text-lg text-gray1 py-10 '>
        {notfound}
    </div>
  )
}

NotFound.defaultProps = {
  notfound : "متاسفانه چیزی پیدا نکردیم 😒"
}