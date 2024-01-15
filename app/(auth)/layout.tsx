const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-center min-h-screen bg-primary-500 ">
            <div>{children}</div>
        </div>
    );
};

export default Layout;
