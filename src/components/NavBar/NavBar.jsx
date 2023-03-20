import Cart from "../CartWidget/CartWidget"
import '../../App.css'
import imagen from '../../assets/imagen.jpg'


const NavBar = () => {
    return (
        <nav>
            <img className="logo" src={imagen} alt="logo-casino" />
            <h1>CASINO 24/7</h1>
        <>
            <button>RULETA</button>
            <button>BLACKJACK</button>
            <button>TRAGA MONEDAS</button>
            <button>BINGO</button>
            <button><Cart/></button>
        </>
        </nav>
    )
}

export default NavBar