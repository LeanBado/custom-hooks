import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const useFetch = (url) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });


    const getQuote = async()=>{

        const quote = await fetch(url)
        const data = await quote.json()
      

        setState({
            data,
            isLoading: false,
            hasError: null,
        })

    }



    useEffect(() => {
        
        getQuote()


    }, [url]);

  return {
    data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
  }
}
