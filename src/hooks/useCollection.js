
import { useEffect, useState,useRef } from "react";
import { db } from "../firebase/config";
import {collection, onSnapshot,query,where,orderBy} from 'firebase/firestore'


export const useCollection=(koleksiyon,_q,_ob)=>{

    const [documents,setDocuments]=useState(null)
    const [error,setError]=useState(null)

    const q=useRef(_q).current
    const ob=useRef(_ob).current

    useEffect(()=>{
        let ref=collection(db,koleksiyon)

        if(q){
            ref=query(ref,where(...q))
        }

        if(ob){
            ref=query(ref,orderBy(...ob))
        }

        const unsub=onSnapshot(ref,(snap)=>{
            let dizi=[];
            snap.docs.forEach(doc=>{

                dizi.push({...doc.data(),id:doc.id})

            })

            setDocuments(dizi)
            setError(null)
        },(error)=>{
            console.log(error.message);
            setError('Verilere Erişilemedi')
        })

        return ()=>unsub()
    },[koleksiyon,q,ob])


    return {documents,error}
}