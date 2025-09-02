import { Volume } from "./volume.interface";

export interface GoogleBooksResponse {
    kind: string;
    totalItems: number;
    items?: Volume[];
}
