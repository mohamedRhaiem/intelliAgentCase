export type OrgQuery = {
    organization: {
        login: string
        repositories: {
            first: number
            edges: {
                node: {
                    id: string
                    name: string
                    url: string
                }
            }
        }
    }
};