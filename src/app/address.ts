import { Gio } from "./gio";

export interface Address 
{
    street:string;
suite	:string;
city:string;
zipcode	:string;
geo:Gio;
}
