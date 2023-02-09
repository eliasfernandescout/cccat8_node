import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";
import Connection from "../../database/Database";

export default class ItemRepositoryDatabase implements ItemRepository{
    constructor(
        readonly connection: Connection
    ){}

    async getItem(idItem: number): Promise<Item>{
        const [itemData] = await this.connection.query("select * from ccca.item where id_item = $1", [idItem]);
        return new Item(itemData.id_item, itemData.description, parseFloat(itemData.price));
        // const items = [];
        // for (const itemData of itemsData ){
        //     items.push(new Item(itemData.idItem, itemData.description, parseFloat(itemData.price)));

        // }


        
    }
}