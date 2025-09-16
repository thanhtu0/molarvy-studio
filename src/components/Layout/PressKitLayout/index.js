import Sidebar from './Sidebar';

function PressKitLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default PressKitLayout;
