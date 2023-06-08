export function SetAuthToken(name: string) {
    localStorage.setItem("AuthToken", name);
}
export function GetAuthToken() {
    return localStorage.getItem("AuthToken");
}
export function ClearAuthToken(name: string) {
    localStorage.removeItem("AuthToken");
}