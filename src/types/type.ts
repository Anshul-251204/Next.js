import type { OAuthConfig, } from "next-auth/providers/oauth";
import type { GithubProfile } from "next-auth/providers/github";
import type { CredentialsConfig } from "next-auth/providers/credentials";

export type OAuthAndCredentialsType = (OAuthConfig<GithubProfile> | CredentialsConfig<{
    username: {
        label: string;
        type: string;
        placeholder: string;
    };
    password: {
        label: string;
        type: string;
        placeholder: string;
    };
}>)[]


export type  TodoType = {
    title:string,
    description:string,
    isDone:boolean,
    id : number ;
}