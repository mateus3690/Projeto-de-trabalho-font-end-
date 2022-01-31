//import { useState, useEffect } from "react";

import styles from "../static/css/mensagem.module.css";

function mensagem({tipo, msg}){

    /*const [views, setViews] = useState(false)

    useEffect(() => {

        if(!msg) {
            setViews(false)
            return
        }

        setViews(true)

        const timer = setTimeout(() => {
            setViews(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])*/

    return(<div className={`${styles.mensagem} ${styles[tipo]}`}>{msg}</div>)
}

export default mensagem;
