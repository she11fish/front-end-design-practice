import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <link href="https://blogfonts.com/css/aWQ9MTUzMjQ5JnN1Yj0yNDkmYz1mJnR0Zj1GdXR1cmFQVEJvbGQub3RmJm49ZnV0dXJhLXB0/Futura PT.otf" rel="stylesheet" type="text/css"/>        
            <nav className="first_container">
                <div>
                    <svg role="img" aria-labelledby="logo" class="image_logo" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21">
                    <title id="logo">Ableton Homepage</title>
                    <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
                    </svg>
                    <h3>Live</h3>
                    <h3>Push</h3>
                    <h3>Link</h3>
                    <h3>Shop</h3>
                    <h3>Packs</h3>
                    <h3>Help</h3>
                    <h3 className='orange'>More +</h3>

                </div>
                <div>
                    <h3 className="free-trial">Try Live for free</h3>
                    <h3 className="account">Log in or register</h3>
                </div>
            </nav>
            <div class="line-seperation"></div>
        </>
        
    )
}