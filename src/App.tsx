import Header from "./components/Header";
import sneakerLogo from "./assets/images/logo.svg";
import cart from "./assets/images/icon-cart.svg";
import avatar from "./assets/images/image-avatar.png";

function App() {
    return (
        <div className="min-w-screen items-center flex flex-col">
            <Header logo={sneakerLogo} cart={cart} userAvatar={avatar} />
        </div>
    );
}

export default App;
