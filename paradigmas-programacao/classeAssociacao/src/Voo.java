import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Voo {
    private int numero;
    LocalDateTime data;
    private String origem;
    private String destino;

    public Voo() {
    }
    public Voo(int numero, LocalDateTime data, String origem, String destino) {
        this.numero = numero;
        this.data = data;
        this.origem = origem;
        this.destino = destino;
    }

    public int getNumero() {
        return numero;
    }
    public void setNumero(int numero) {
        this.numero = numero;
    }

    public LocalDateTime getData() {
        return data;
    }
    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public String getOrigem() {
        return origem;
    }
    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public String getDestino() {
        return destino;
    }
    public void setDestino(String destino) {
        this.destino = destino;
    }

    @Override
    public String toString() {
        DateTimeFormatter formatoBR = DateTimeFormatter.ofPattern(" dd/MM/yyyy 'às' HH'h'mm ");
        return "Voo{" +
                "numero=" + numero +
                ", data=" + data.format(formatoBR) +
                ", origem='" + origem + '\'' +
                ", destino='" + destino + '\'' +
                '}';
    }
}
