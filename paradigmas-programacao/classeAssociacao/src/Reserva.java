import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Reserva {
    private int codigo;
    private int poltrona;
    private LocalDateTime data;
    private Passageiro passageiro;
    private Voo voo;

    public Reserva() {
    }
    public Reserva(int codigo, int poltrona, LocalDateTime data, Passageiro passageiro, Voo voo) {
        this.codigo = codigo;
        this.poltrona = poltrona;
        this.data = data;
        this.passageiro = passageiro;
        this.voo = voo;
    }

    public int getCodigo() {
        return codigo;
    }
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public int getPoltrona() {
        return poltrona;
    }
    public void setPoltrona(int poltrona) {
        this.poltrona = poltrona;
    }

    public LocalDateTime getData() {
        return data;
    }
    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public Passageiro getPassageiro() {
        return passageiro;
    }
    public void setPassageiro(Passageiro passageiro) {
        this.passageiro = passageiro;
    }

    public Voo getVoo() {
        return voo;
    }
    public void setVoo(Voo voo) {
        this.voo = voo;
    }

    @Override
    public String toString() {
        DateTimeFormatter formatoBR = DateTimeFormatter.ofPattern(" dd/MM/yyyy 'às' HH'h'mm ");
        return "Reserva{" +
                "codigo=" + codigo +
                ", poltrona=" + poltrona +
                ", data=" + data.format(formatoBR) +
                ",\npassageiro=" + passageiro +
                ",\nvoo=" + voo +
                '}';
    }
}
