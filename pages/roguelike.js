import { useEffect } from "react"

export default function Roguelike() {
    useEffect(()=> {
        window.location.href = '/roguelike/index.html';
    },[]);
    return null;
}
  