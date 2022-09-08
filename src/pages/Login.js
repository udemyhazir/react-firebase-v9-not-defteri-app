import { useState } from "react"
import {useLogin} from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {login,error,isPending}=useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault()

    login(email, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>AOS Not Defteri Giriş Sayfası</h3>
      
      <label>Email adresiniz:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Parolanız:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      {!isPending && <button>Giriş Yap</button>}
      {isPending && <button disabled style={{backgroundColor:"InfoText"}}>İşlem Sürüyor</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login