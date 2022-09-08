
import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {

  const [userName,setUserName]=useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const {signup,isPending,error}=useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(password===confirmPassword){
      signup(email, password,userName)
    }else{
      alert('Parolalar eşleşmedi')
    }

   
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>AOS Not Defteri Üyelik Sayfası</h3>

      <label>Kullanıcı Adınız:</label>
      <input 
        type="text" 
        onChange={(e) => setUserName(e.target.value)} 
        value={userName} 
      />
      
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

      <label>Parola Tekrarınız:</label>
      <input 
        type="password" 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        value={confirmPassword} 
      />

      {!isPending && <button>Üye Ol</button>}
      {isPending && <button disabled style={{backgroundColor:"InfoText"}}>İşlem Sürüyor</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup