
import { useFirestore } from "../hooks/useFirestore"
import moment from 'moment'
import 'moment/locale/tr'

export default function NotDetay({not}) {

  const {dokumanSil,response}=useFirestore("notlar")
  

  return (
    <div className="not-detay">
      <h4>{not.baslik}</h4>
      <p>{not.aciklama}</p>
      <p className='zaman'>{moment(new Date(not.tarih)).fromNow()}</p>
      <span className="material-symbols-outlined" onClick={()=>dokumanSil(not.id)}>delete_forever</span>
    </div>

    
  )
}




