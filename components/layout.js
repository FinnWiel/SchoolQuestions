import Nav from "./Nav";

export default function Layout({children}){
    return (
        <div className="mx-8 md:max-w-4xl md:mx-auto font-poppins">
            <Nav />
            <main>{children}</main>
        </div> 
    )
}