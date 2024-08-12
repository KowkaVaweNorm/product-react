export const getQueryParams = (params: OptionalRecord<string, string>): URL => {
  const url = new URL(String(window.location));
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      url.searchParams.set(name, value);
    }
  });
  console.log(url.searchParams.toString());

  return url;
};

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */
export const addQueryParams = (params: OptionalRecord<string, string>): void => {
  window.history.pushState('', '', getQueryParams(params));
};
