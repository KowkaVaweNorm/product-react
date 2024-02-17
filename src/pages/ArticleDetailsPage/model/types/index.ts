import { type ArticleDetailsCommentsSchema } from "./articleDetailsCommentsSchema";
import { type ArticleDetailsRecommendationsSchema } from "./articleDetailsRecommendationsSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsRecommendationsSchema
}
