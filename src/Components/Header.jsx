import { Brain } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
    const [active, setActive] = useState("listHeader")
    const [icon, setIcon] = useState("buttonMobileMenu")

    const toggleHeader = () => {
        if(active === "listHeader") {
            setActive("listHeader listHeader_active")
        } else {
            setActive("listHeader")
        }

        if (icon === "buttonMobileMenu") {
            setIcon("buttonMobileMenu menuOpen")
        } else {
            setIcon("buttonMobileMenu")
        }
    }

    return(
        <>
            <nav className="bodyHeader">
                <Link to="/" ><Brain size={32} className="iconHeader"/></Link>

                <ul className={active}>
                    <li className="navItemFirst" >
                        <a href="#">Home</a>
                    </li>
                    <li className="navItemQuite" >
                        <a href="#">Contact</a>
                    </li>
                    <li className="navItemEnd" >
                        <a href="#">About</a>
                    </li>
                </ul>

                <div onClick={toggleHeader} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </>
    )
}

window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 200)
})