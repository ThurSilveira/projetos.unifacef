import java.util.Date;

public class TestaCliente {
    public static void main(String[] args){

        Cliente cliente = new Cliente(1, "Zezito", "451.666.777-90", "R. Abc");

        Pedido pedido = new Pedido(2, new Date(), cliente);

        Produto telefone = new Produto(9, "Aifone 19", "Telefone top", 5000);
        Produto tv = new Produto(10, "LG", "Smart TV", 1000);

        pedido.adicionaItemPedido(1, 1, telefone);
        pedido.adicionaItemPedido(2, 3, tv);

        System.out.println(pedido);

    }
}
