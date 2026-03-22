import java.time.LocalDateTime;

public class TesteClinica {
    public static void main(String[] args) {

        Medico medico = new Medico(1, "Sr. Fulano", "Psiquiatria");
        Paciente paciente = new Paciente(1, "Will Byers", "124.956.719-80");

        Consulta consulta = new Consulta(
                LocalDateTime.of(2026, 5, 20, 10, 0),
                250.0,
                medico,
                paciente
        );

        System.out.println("CONSULTA");
        System.out.println(consulta);
    }
}