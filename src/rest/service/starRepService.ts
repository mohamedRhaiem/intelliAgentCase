import get from '../provider/api';

export async function starRep(owner: string, repo: string) {
    // await get.get(` /user/starred/${owner}/${repo}`)
    await get.get(`/user/starred/${owner}/${repo}`);
};
