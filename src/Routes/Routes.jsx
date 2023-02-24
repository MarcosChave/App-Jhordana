import React from "react"
import Header from '../Components/Header'
import { Outlet } from "react-router-dom"

function Routes() {


  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Routes