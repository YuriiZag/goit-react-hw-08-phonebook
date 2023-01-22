import { AuthNow } from "components/authNav/authNav"
import { Navigation } from "components/navigation/navigation"
import { SiteHeader } from "components/appBar/appBar.styled"
import { UserMenu } from "components/userMenu/userMenu"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "redux/auth/selectors"

export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)

    return ( 
        <SiteHeader>
            <Navigation></Navigation>
            {isLoggedIn ? <UserMenu></UserMenu> : <AuthNow></AuthNow>}
        </SiteHeader>
    )
}