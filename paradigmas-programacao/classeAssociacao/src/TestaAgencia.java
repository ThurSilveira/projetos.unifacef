import java.time.LocalDateTime;

public class TestaAgencia {
    public static void main(String[] args){
        Passageiro pass1 = new Passageiro("Arthur", "451.555.090-90");
        Passageiro pass2 = new Passageiro("Mariane", "123.555.190-99");

        LocalDateTime data = LocalDateTime.of(2026, 7, 30, 10, 0);
        Voo voo1 = new Voo(101, data, "Guarulhos", "Camburiu");

        Reserva rs1 = new Reserva(1, 20, LocalDateTime.now(), pass1, voo1);

        System.out.println(rs1.toString());
    }
}
