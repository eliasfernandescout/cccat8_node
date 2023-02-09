import Checkout from "./application/Checkout";
import GetOrderByCpf from "./application/GetOrdersByCpf";
import Preview from "./application/Preview";
import Item from "./domain/entity/Item";
import OrderController from "./infra/controller/OrderController";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import ItemRepositoryMemory from "./infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "./infra/repository/memory/OrderRepositoryMemory";

const itemRepository = new ItemRepositoryMemory();
itemRepository.save(new Item(1,"Guitarra", 1000));
itemRepository.save(new Item(2, "Amplificador", 5000));
itemRepository.save(new Item(3, "Cabo", 30));
const orderRepository = new OrderRepositoryMemory();
const preview = new Preview(itemRepository);
const checkout = new Checkout(itemRepository, orderRepository);
const getOrderByCpf = new GetOrderByCpf(orderRepository);



const httpServer = new ExpressAdapter();
new OrderController(httpServer, preview, checkout, getOrderByCpf)
httpServer.listen(3000);