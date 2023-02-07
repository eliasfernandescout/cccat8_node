import express from "express";
import Checkout from "./application/Checkout";
import GetOrderByCpf from "./application/GetOrdersByCpf";
import Preview from "./application/Preview";
import Item from "./domain/Item";
import ItemRepositoryMemory from "./ItemRepositoryMemory";
import OrderRepositoryMemory from "./OrderRepositoryMemory";
const app = express();
app.listen(express.json());

const itemRepository = new ItemRepositoryMemory();
itemRepository.save(new Item(1, "Guitarra", 1000));
itemRepository.save(new Item(1, "Amplificador", 5000));
itemRepository.save(new Item(1, "Cabo", 30));

const orderRepository = new OrderRepositoryMemory();


app.post("/preview", async function(request, response){
    const preview = new Preview(itemRepository);
    const total = await preview.execute(request.body);
    response.json({total});

});

app.post("/checkout", async function(request, response){
    const checkout = new Checkout(itemRepository, orderRepository);
    await checkout.execute(request.body);
    response.end()

});

app.get("/orders/:cpf", async function(request, response){
    const getOrderByCpf = new GetOrderByCpf(orderRepository);
    const orders = await getOrderByCpf.execute(request.params.cpf);
    response.json(orders);

});

app.listen(3000);
