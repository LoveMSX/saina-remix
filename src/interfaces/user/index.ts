import type { LoginDTO } from "../../data/dto/login";
import type { UserDTO } from "../../data/dto/user";

export interface UserActions {
    login: ({email,password} : LoginDTO) => void;
    logout: () => void;
    user?: UserDTO;
}