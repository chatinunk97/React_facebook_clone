const ACCESS_TOKEN = "ACCESS_TOKEN";
export const addAccessToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};
function getAccessToken(){
  return localStorage.getItem(ACCESS_TOKEN);
};
export const removeAccessToken = ()=>{
    localStorage.removeItem(ACCESS_TOKEN)
}
export {getAccessToken}