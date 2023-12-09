import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';
import MainIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile_page-icon.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { type SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const list: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте'
      }
    ];
    if (userData !== undefined) {
      list.push({
        path: RoutePath.profile + userData.id,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true
      });
    }
    return list;
  }
);
