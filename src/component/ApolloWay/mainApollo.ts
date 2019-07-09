import { withRepositories } from "../../graphql/service/repositoryService";
import { RepositoriesApollo } from "./repositoriesApollo";
// can be with recompose compose
// export const MainComposeIntelliAgent = compose(
//   withRepositories
// )(RepositoriesIntelliAgent as any);
// Enhance our component.

// can be with Apollo compose
export const MainApollo = withRepositories(RepositoriesApollo as any);