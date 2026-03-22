public class TesteVenda {
    public static void main(String[] args) {

        // Produtos (existem independentemente)
        Produto p1 = new Produto(1, "Arroz", 25.0);
        Produto p2 = new Produto(2, "Feijão", 10.0);

        // Cliente (existe independentemente)
        Cliente cliente = new Cliente(1, "João");

        // Venda (todo principal)
        Venda venda = new Venda(1, cliente);

        // Composição: criando itens dentro da venda
        venda.adicionarItem(1, 2, p1); // 2 arroz
        venda.adicionarItem(2, 1, p2); // 1 feijão

        // print
        System.out.println(venda);
    }
}
