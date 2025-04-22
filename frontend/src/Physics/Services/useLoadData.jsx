import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

export default function useLoadData(callback, dispatchFunction = null){

    const dispatch = useDispatch()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async() => {
        try{
            const response = await callback()
            if(response.success){
                setData(response.data)
                setLoading(false)
                if(dispatchFunction){
                    dispatch(dispatchFunction(response.data))
                }
            }else{
                console.error("Une erreur est survenue lors de la récupération des données nécessaire à l'affichage de cette page")
                toast.error("Une erreur est survenue lors de la récupération des données nécessaire à l'affichage de cette page")
            }
        }catch(error){
            console.error("Une erreur est survenue lors de la récupération des données nécessaire à l'affichage de cette page")
            console.error(error)
            toast.error("Une erreur est survenue lors de la récupération des données nécessaire à l'affichage de cette page")
        }
    }
    useEffect(() => {
        if(loading){
            fetchData()
        }
    }, [loading])

    return {
        data,
        loading
    }
}