import {useState,useEffect} from 'react'
import { getGist } from '../helpers/getGist'

export const useFetchGist = (id) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {

        getGist(id).then( gist => {

                setState ( {
                    data: gist,
                    loading: false
                });
            
            }
        )
    }, [])

    return state; //data:[], loading: true;

}