import java.util.ArrayList;
import java.util.Date;

public class Pedido {

    private int id;
    private Date data;
    private Clientes clientes;
    private ArrayList<ItemPedido> itensPedido;

    public Pedido() {
        this.itensPedido = new ArrayList<>();
    }

    public void adicionaItemPedido(int id, int quantidade, Produto produto){
        ItemPedido aux = new ItemPedido(id, quantidade, produto);
        this.itensPedido.add(aux);
        System.out.println("Item adicionado com sucesso");
    }

    public Pedido(int id, Date data, Clientes clientes) {
        this.id = id;
        this.data = data;
        this.clientes = clientes;
        this.itensPedido = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public Clientes getCliente() {
        return clientes;
    }

    public void setCliente(Clientes clientes) {
        this.clientes = clientes;
    }

    @Override
    public String toString() {
        return "Pedido{" +
                "id=" + id +
                ", data=" + data +
                ", clientes=" + clientes +
                ", ItensPedido=" + itensPedido +
                '}';
    }
}
