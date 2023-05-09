import { useState } from 'react'
import '../styles/Footer.css'

export const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-element">
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className="lmj-footer-element">Laissez-nous votre mail :</div>
        </footer>
    )
}
