import dynamic from 'next/dynamic'

const HeaderComponent = dynamic(import("../components/header"));
const NavbarComponent = dynamic(import("../components/navbar"));
const FooterComponent = dynamic(import("../components/footer"))

export default function LayoutModule({children}) {
    return (
        <>
        <HeaderComponent />
        <NavbarComponent />
        {children}
        <FooterComponent />
        </>
    )
}