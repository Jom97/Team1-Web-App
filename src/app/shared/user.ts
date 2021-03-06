import { Role } from "./role";

export class User {
    public userId!: number;
    public userName!: string;
    public password!: string;
    public fullName!: string;
    public active!: boolean;
    public role!: Role;
}
