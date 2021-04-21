import {save, load, remove} from './storage';

const tokenKey = 'SMEETHERS_TOKEN';

export async function saveToken(token: string) {
  await save(tokenKey, token);
  console.log(`token ${token} saved`);
}

export async function loadToken() {
  return await load(tokenKey);
}

export async function clearToken() {
  await remove(tokenKey);
}
