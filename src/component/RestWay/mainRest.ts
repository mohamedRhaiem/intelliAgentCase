import { RepositoriesRest } from "./repositoriesRest";
import { withFetching } from "../../rest/service/repositoryService";

export const MainRest = withFetching(RepositoriesRest);