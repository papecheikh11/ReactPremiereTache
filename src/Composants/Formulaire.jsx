import React from 'react'
import './FichierCSS/Formulaire.css'

function Formulaire() {
  return (
    <body>
        <form action="" class ="form">

        <div class= "titleForm">
            <h1  class ="monTitre">CRUD OPERATIONS</h1>
            <h2>SIGN IN</h2>
            <p>Enter your credentials to access to your account</p>
        </div>
        <div class="bodyForm">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter your email'/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter your password' />

            <button>SIGN IN</button>
            <p>Forgot your password? <a href="#">Reset password</a></p>

        </div>
        </form>
    </body>
    
  )
}

export default Formulaire
