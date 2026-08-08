public class TesteProjeto {
    public static void main(String[] args) {

        Programador p1 = new Programador(1, "Arthur", "Java");
        Programador p2 = new Programador(2, "Mariane", "JavaScript");

        Projeto projeto = new Projeto(1, "Sistema Sindicato");

        projeto.adicionarProgramador(p1);
        projeto.adicionarProgramador(p2);

        projeto.listarProgramadores();
    }
}