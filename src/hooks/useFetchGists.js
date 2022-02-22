import {useState,useEffect} from 'react'
import { getGists } from '../helpers/getGists'

export const useFetchGists = () =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {

        getGists().then( gists => {

                setState ( {
                    data: gists,
                    loading: false
                });
            
            }
        )
    }, [])

    return state; //data:[], loading: true;

}