import { withRepositories } from "../../service/repositoryService";
import { RepositoriesIntelliAgent } from "./repositoriesIntelliAgent";
// can be with recompose compose
// export const MainComposeIntelliAgent = compose(
//   withRepositories
// )(RepositoriesIntelliAgent as any);
// Enhance our component.

// can be with Apollo compose
export const MainComposeIntelliAgent = withRepositories(RepositoriesIntelliAgent as any);