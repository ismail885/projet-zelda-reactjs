import React, { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { Login, Logout } from "../../auth/LoginOut";

import "../../pages/home.scss";

export default function Connect() {
  const { user } = useAuth();
    return (
        <div>
        <br></br>
        <br></br>
            {user ? (
        <>
          <p>Bienvenue {user.username}</p>
        </>
      ) : (
        <Login />
      )}
      <br></br>
      <br></br>
        </div>
    );
}