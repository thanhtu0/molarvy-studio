import Footer from './Footer';
import Navbar from './Navbar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
