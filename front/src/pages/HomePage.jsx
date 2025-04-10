import Movies from "./movies/Movies";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const { logout } = useUser();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <>
            <div id="wrapper">
                {/* <!-- Header --> */}
                <header id="header">
                    <div class="inner">
                        <button
                            onClick={handleLogout}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                color: "#fff",
                                border: "none",
                                padding: "8px 12px",
                                borderRadius: "4px",
                                cursor: "pointer",
                                zIndex: 999,
                            }}
                        >
                            Se déconnecter
                        </button>
                        {/* <!-- Logo --> */}
                        <a class="logo">
                            <span class="symbol"><img src="images/logo.svg" alt="" /></span><span class="title">MovieBooker</span>
                        </a>
                    </div>
                </header>

                {/* <!-- Main --> */}
                <div id="main">
                    <div class="inner">
                        <header>
                            <h1>Trouvez votre film, choisissez l’horaire,<br /> et profitez de la séance !</h1>
                            <p>Plus besoin de vous déplacer au guichet : réservez votre film préféré en ligne, sélectionnez l’horaire qui vous convient, et vivez l’expérience cinéma en toute tranquillité.</p>
                        </header>
                        <Movies />
                    </div>
                </div>

                {/* <!-- Footer --> */}
                <footer id="footer">
                    <div class="inner">
                        <section>
                            <h2>Get in touch</h2>
                            <form method="post" action="#">
                                <div class="fields">
                                    <div class="field half">
                                        <input type="text" name="name" id="name" placeholder="Name" />
                                    </div>
                                    <div class="field half">
                                        <input type="email" name="email" id="email" placeholder="Email" />
                                    </div>
                                    <div class="field">
                                        <textarea name="message" id="message" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <ul class="actions">
                                    <li><input type="submit" value="Send" class="primary" /></li>
                                </ul>
                            </form>
                        </section>
                        <section>
                            <h2>Follow</h2>
                            <ul class="icons">
                                <li><a href="#" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li>
                                <li><a href="#" class="icon brands style2 fa-facebook-f"><span class="label">Facebook</span></a></li>
                                <li><a href="#" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
                                <li><a href="#" class="icon brands style2 fa-dribbble"><span class="label">Dribbble</span></a></li>
                                <li><a href="#" class="icon brands style2 fa-github"><span class="label">GitHub</span></a></li>
                                <li><a href="#" class="icon brands style2 fa-500px"><span class="label">500px</span></a></li>
                                <li><a href="#" class="icon solid style2 fa-phone"><span class="label">Phone</span></a></li>
                                <li><a href="#" class="icon solid style2 fa-envelope"><span class="label">Email</span></a></li>
                            </ul>
                        </section>
                        <ul class="copyright">
                            <li>&copy; MovieBooker. All rights reserved</li>
                        </ul>
                    </div>
                </footer>

            </div>
        </>
    )
}