import StorageService from "./storage-service"

export const saveSessionData = (token: string, email: string, name: string) => {
    StorageService.setItem('token', token);
    StorageService.setItem('name', name);
    StorageService.setItem('email', email);
}

export const removeSessionData = () => {
    StorageService.removeItem('token');
    StorageService.removeItem('name');
    StorageService.removeItem('email');
}

export const signOutService = () => {
    removeSessionData();
    window.location.reload();
}

export const getToken = () => {
   return StorageService.getItem('token');
}

export const getSessionData = () => {
    return {
        token: StorageService.getItem('token'),
        username: StorageService.getItem('name'),
        email: StorageService.getItem('email'),
    }
}
