import React, { useState } from  "react";

import { APIURL } from "../index";

    async function userLogin(username, password) {
        return fetch(`${APIURL}/username, password`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: 'username',
                password: 'password',
              }
            })
          }).then(response => response.json())
            .then(result => {
              console.log(result);
            })
            .catch(console.error);

    function Login({setToken, setPassword, username, password})
        const handleSubmit 