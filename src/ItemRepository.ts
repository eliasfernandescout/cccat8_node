import Item from "./domain/Item";

export default interface ItemRepository{
    getItem(idItem: number): Promise<Item>;
}