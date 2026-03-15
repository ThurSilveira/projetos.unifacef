import java.util.Date;

public class TestaCliente {
    public static void main(String[] args){

        Clientes cl01 = new Clientes(1, "Zezito", "451.666.777-90", "R. Abc");

        Pedido ped01 = new Pedido(2, new Date(), cl01);

        Produto prod01 = new Produto(5000, "Telefone top", "Aifone 19", 9);
        Produto prod02 = new Produto(1000, "tv veia", "LG", 10);

        ped01.adicionaItemPedido(2, 3, prod02);

        System.out.printf(ped01.toString());

    }
}
