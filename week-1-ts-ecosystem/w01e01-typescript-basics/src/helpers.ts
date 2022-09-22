export interface Address {
    street: string,
    no: number,
}

export interface User {
    name: string;
    age: number;
    email: string;
    address: Address,
}

export type HasGivenAgeFn = (user: User) => boolean;

export function hasAddress(user: User): boolean {
    return Boolean(user.address)
}

export function hasGivenAge(requiredAge: number): HasGivenAgeFn {
    return (user: User) => user.age >= requiredAge
}

export const isAdult = hasGivenAge(18);