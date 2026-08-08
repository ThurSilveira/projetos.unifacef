import java.util.ArrayList;

public class Avaliacao {
    private int id;
    private String nome;
    private ArrayList<Questao> questoes;

    public Avaliacao() {
        this.questoes = new ArrayList<>();
    }

    public Avaliacao(int id, String nome) {
        this.id = id;
        this.nome = nome;
        this.questoes = new ArrayList<>();
    }

    public void adicionarQuestao(int numero, float valor, String enunciado){
        Questao novaQuestao = new Questao(numero, valor, enunciado);
        this.questoes.add(novaQuestao);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Avaliacao{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", questoes=" + questoes +
                '}';
    }
}
