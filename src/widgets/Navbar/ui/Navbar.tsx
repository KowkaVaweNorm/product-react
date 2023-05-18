
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <div className={cls.link}></div>

            <AppLink
                to={'/'}
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
            >
                Главная
            </AppLink>

            <AppLink
                to={'/About'}
                theme={AppLinkTheme.SECONDARY}
            >
                О сайте
            </AppLink>

        </div>
    );
}




