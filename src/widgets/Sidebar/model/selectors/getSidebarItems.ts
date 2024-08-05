import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import MainIcon from "@/shared/assets/icons/home-icon.svg";
import AboutIcon from "@/shared/assets/icons/about-icon.svg";
import ProfileIcon from "@/shared/assets/icons/profile_page-icon.svg";
import ArticleIcon from "@/shared/assets/icons/article-20-20.svg";
import { type SidebarItemType } from "../types/sidebar";
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile
} from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const list: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: "Главная"
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: "О сайте"
    }
  ];
  if (userData !== undefined) {
    list.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: "Профиль",
        authOnly: true
      },
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: "Статьи",
        authOnly: true
      }
    );
  }
  return list;
});
