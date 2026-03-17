import java.util.ArrayList;

public class Disciplina {
    private int id;
    private String nome;
    private String professor;
    private ArrayList<Aluno> alunos;
    private ArrayList<Avaliacao> avaliacoes;

    public Disciplina() {
        this.alunos = new ArrayList<>();
        this.avaliacoes = new ArrayList<>();
    }

    public Disciplina(int id, String nome, String professor) {
        this.id = id;
        this.nome = nome;
        this.professor = professor;
        this.alunos = new ArrayList<>();
        this.avaliacoes = new ArrayList<>();
    }

    public void matricularAluno(Aluno a){ // agregação
        this.alunos.add(a);
    }

    public Avaliacao criarAvaliacao(int id, String nome){ // composição
        Avaliacao novaAvaliacao = new Avaliacao(id, nome);
        this.avaliacoes.add(novaAvaliacao);
        return novaAvaliacao;
    }

    public Avaliacao getAvaliacoes(String nome){
        for (Avaliacao av : avaliacoes){
            if(av.getNome().equalsIgnoreCase(nome)){
                return av;
            }
        }
        return null;
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

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }

    @Override
    public String toString() {
        return "Disciplina{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", professor='" + professor + '\'' +
                ", alunos=" + alunos +
                ", avaliacoes=" + avaliacoes +
                '}';
    }
}
