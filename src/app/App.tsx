
import { Link, Route, Routes } from 'react-router-dom';
import "./styles/index.scss"
import { Suspense } from 'react';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { AppRouter } from 'app/providers/router';






const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/About'}>О сайте</Link>
            <AppRouter />
        </div>
    );
}

export default App;
