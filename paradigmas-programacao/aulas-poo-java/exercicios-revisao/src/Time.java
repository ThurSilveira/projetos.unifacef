import java.util.ArrayList;

public class Time {
    private int id;
    private String nome;
    private String tecnico;
    private ArrayList<Atleta> atletas;

    public Time(int id, String nome, String tecnico) {
        this.id = id;
        this.nome = nome;
        this.tecnico = tecnico;
        this.atletas = new ArrayList<>();
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getTecnico() { return tecnico; }
    public void setTecnico(String tecnico) { this.tecnico = tecnico; }

    public void contratarAtleta(Atleta a) {
        atletas.add(a);
    }

    @Override
    public String toString() {
        return "Time{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", tecnico='" + tecnico + '\'' +
                ", atletas=" + atletas +
                '}';
    }
}