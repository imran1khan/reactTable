import { atom } from "recoil";

export const SortFirstName = atom({
    key: 'SortFirstName',
    default: false,//false means don't sort true means sort
});
export const SortSecoundName=atom({
    key:'SortSecondName',
    default:false,
});
export const SortEmail=atom({
    key:'SortEmail',
    default:false,
});