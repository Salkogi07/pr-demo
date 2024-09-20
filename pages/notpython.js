import { useEffect } from "react"

export default function NotPython() {
    useEffect(()=> {
        window.location.href = '/notpython/index.html';
    },[]);
    return null;
}