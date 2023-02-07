import ItemRepository from "../ItemRepository"
import Order from "../domain/Order"
import OrderRepository from "../OrderRepository";

export default class GetOrderByCpf {
    constructor(readonly orderRepository: OrderRepository){
    }
    async execute(cpf: string): Promise<Output[]>{
       const output = [];
       const orders = await this.orderRepository.getByCpf(cpf);
       for(const order of orders){
        output.push({total: order.getTotal()});
       }
       return output;

    }
}

type Output = {
    total: number
}