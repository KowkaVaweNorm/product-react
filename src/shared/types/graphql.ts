// Тип для отдельной ошибки
export interface GQLError {
  message: string;
  locations?: Array<{ line: number; column: number }>; // Местоположение ошибки в запросе
  path?: string[]; // Путь к полю, которое вызвало ошибку
  extensions?: Record<string, any>; // Дополнительные данные
}

// Общий тип для GraphQL ответа
export interface GQLResponse<DataType> {
  data?: DataType; // Данные могут быть не всегда (если есть ошибки)
  errors?: GQLError[]; // Массив ошибок, если что-то пошло не так
  extensions?: Record<string, any>; // Дополнительные данные (опционально)
}
