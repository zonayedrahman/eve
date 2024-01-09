const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-center min-h-screen bg-green-700">
            <div>{children}</div>
        </div>
    );
};

export default Layout;
