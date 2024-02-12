import sneakerLogo from "./assets/images/logo.svg";
import avatar from "./assets/images/image-avatar.png";

import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import { CartContextProvider } from "@/context/CartContextProvider";

function App() {
    return (
        <div className="min-w-screen items-center flex flex-col">
            <CartContextProvider>
                <Header logo={sneakerLogo} userAvatar={avatar} />
                <ProductSection />
            </CartContextProvider>
        </div>
    );
}

export default App;
