import java.time.LocalDateTime;

public class Consulta {
    private LocalDateTime data;
    private double valor;
    private Medico medico;
    private Paciente paciente;

    public Consulta(LocalDateTime data, double valor, Medico medico, Paciente paciente) {
        this.data = data;
        this.valor = valor;
        this.medico = medico;
        this.paciente = paciente;
    }

    public LocalDateTime getData() { return data; }
    public void setData(LocalDateTime data) { this.data = data; }

    public double getValor() { return valor; }
    public void setValor(double valor) { this.valor = valor; }

    public Medico getMedico() { return medico; }
    public void setMedico(Medico medico) { this.medico = medico; }

    public Paciente getPaciente() { return paciente; }
    public void setPaciente(Paciente paciente) { this.paciente = paciente; }

    @Override
    public String toString() {
        return "Consulta{" +
                "data=" + data +
                ", valor=" + valor +
                ", medico=" + medico.getNome() +
                ", paciente=" + paciente.getNome() +
                '}';
    }
}