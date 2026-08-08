import java.util.ArrayList;

public class Projeto {
    private int id;
    private String nomeProjeto;
    private ArrayList<Programador> programadores;

    public Projeto(int id, String nomeProjeto) {
        this.id = id;
        this.nomeProjeto = nomeProjeto;
        this.programadores = new ArrayList<>();
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNomeProjeto() { return nomeProjeto; }
    public void setNomeProjeto(String nomeProjeto) { this.nomeProjeto = nomeProjeto; }

    public void adicionarProgramador(Programador p) {
        programadores.add(p);
    }

    public void listarProgramadores() {
        System.out.println("Programadores do projeto " + nomeProjeto + ":");
        for (Programador p : programadores) {
            System.out.println(p);
        }
    }

    @Override
    public String toString() {
        return "Projeto{id=" + id + ", nomeProjeto='" + nomeProjeto + "'}";
    }
}