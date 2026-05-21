import { MangadexApi } from "@/api";
import { Constants } from "@/constants";

export class UrlUtils {
  getSearchNetTromUrl(options: MangadexApi.Manga.GetSearchMangaRequestOptions) {
    const queryString = MangadexApi.Utils.buildQueryStringFromOptions(options);
    return `${Constants.Routes.nettrom.search}${queryString.replaceAll("[]", "")}#results`;
  }

  getBackendUrl() {
    return Constants.BACKEND_URL;
  }

  getGoogleAuthUrl() {
    return this.getBackendUrl() + "/sso/google/redirect";
  }

  getAvatarUrl(avatarPath?: string | null) {
    if (!avatarPath) return "/nettruyen/images/default-avatar.jpg";
    return `${Constants.APP_IMAGE_URL}/${avatarPath}`;
  }
}
