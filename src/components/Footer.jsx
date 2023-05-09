import { useState } from 'react'
import '../styles/Footer.css'

export const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    const handleInput = (event) => {
        setInputValue(event.target.value)
    }

    const handleBlur = () => {
        if (!inputValue.includes('@')) {
            alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.`)
        }
    }

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-element">
                Pour les passionné.e.s de plantes 🌿🌱🌵
            </div>
            <div className="lmj-footer-element">Laissez-nous votre mail :</div>
            <input
                placeholder="Entrez votre mail"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleBlur}
            />
            <button onClick={() => alert(inputValue)}>Envoyer</button>
        </footer>
    )
}
