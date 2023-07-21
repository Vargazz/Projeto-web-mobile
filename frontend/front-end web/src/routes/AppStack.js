import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from '../pages/Register'
import Playbooks from '../pages/Playbooks'
import Login from '../pages/Login'
import PlaybooksCreate from '../pages/PlaybookCreate'
import PlaybooksUpdate from '../pages/PlaybookUpdate'
import Account from '../pages/Account'

const AppStack = () => {
  return(
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/playbooks" element={<Playbooks/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/playbooks/create" element={<PlaybooksCreate/>} />
        <Route path="/playbooks/update" element={<PlaybooksUpdate/>} />
      </Routes>
  )

}

export default AppStack