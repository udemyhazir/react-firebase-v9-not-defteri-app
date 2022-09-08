

import { useEffect, useState } from 'react'
import { useFirestore } from '../hooks/useFirestore'

const NotForm = ({uid}) => {
  const [baslik, setBaslik] = useState('')
  const [aciklama, setAciklama] = useState('')

  const {dokumanEkle,response}=useFirestore('notlar')


  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(response);

    dokumanEkle({
      uid,
      baslik,
      aciklama
    });
    

  }

  useEffect(()=>{
    if(response.success){
      setBaslik('')
      setAciklama('')
    }
  },[response.success])

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Yeni Bir Not Ekle</h3>

      <label>Not Başlık:</label>
      <input 
        type="text" 
        onChange={(e) => setBaslik(e.target.value)} 
        value={baslik}
      />

      <label>Not Açıklama:</label>
      <input 
        type="text" 
        onChange={(e) => setAciklama(e.target.value)} 
        value={aciklama}
      />


      <button>Not Ekle</button>
    </form>
  )
}

export default NotForm