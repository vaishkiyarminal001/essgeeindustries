import React from 'react'
import { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContextProvide'

export const Error = () => {

  const {lang, setLang} = useContext(MyAuthContext);
  // console.log(lang);
  return (
    <div>Error</div>
  )
}
