import { Books } from "./books";

export interface CartItem {
    //un libro che ha le caratteristiche dell'interfaccia Books:
    book:Books,
    creationDate: number,
    //la quantità di libri che vengono aggiunti o tolti dal carrello:
    count: number
}
