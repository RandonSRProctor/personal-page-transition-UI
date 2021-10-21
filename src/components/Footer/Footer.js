import { useStore } from '../../store/data'
import './Footer.css'

export const Footer = () => {
    const footerContent = useStore( state => state.footer.main)
    return (
        <div className="Footer-container">
            <div className="Footer-content">{ footerContent }</div>
        </div>
    )
}
