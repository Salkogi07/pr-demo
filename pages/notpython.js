import { useEffect } from "react"

export default function NotPython() {
    useEffect(()=> {
        window.location.href = '/notPython/index.html';
    },[]);
    return null;
}
  