import api from "../services/api-service";

export const signinService = (request: ISigninServiceRequest) => {
    return api.post('/auth/signin', request).then(({ data }: ISigninServiceResponse) => data);
}

export const signupService = (request: ISignupServiceRequest) => {
    return api.post('/auth/signup', request).then(({ data }: ISignupServiceResponse) => data);
}

export const getUserDataService = () => {
    return api.get('/auth/user').then(({ data }: IGetUserDataServiceResponse) => data);
}

export const updateSelectedCharacterService = (selectedCharacter: number) => {
    return api.post('/auth/updateselectedcharacter', { selectedCharacter }).then(({ data }: IUpdateSelectedCharacterService) => data);
}
interface ISigninServiceRequest {
    email: string;
    password: string;
}
interface ISigninServiceResponse {
    data: {
        ok: boolean;
        data: {
            token: string;
            name: string;
            email: string;
            selectedCharacter: number;
            alternalName: string;
        }
    },
}
interface ISignupServiceRequest {
    name: string;
    email: string;
    password: string;
}

interface ISignupServiceResponse {
    data: {
        ok: boolean;
        data: {
            token: string;
            name: string;
            email: string;
        }
    },
}
interface IGetUserDataServiceResponse {
    data: {
        ok: boolean;
        data: {
            user: {
                name: string;
                email: string;
                selectedCharacter: number;
                alternalName: string;
            }
        }
    },
}

interface IUpdateSelectedCharacterService {
    data: {
        ok: boolean;
        data: {
            name: string;
            email: string;
            selectedCharacter: number;
            alternalName: string;
        }
    },
}
