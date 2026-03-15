public class TesteAcademico {
    public static void main (String[] args){
        Aluno aluno01 = new Aluno(1, 110220, "Arthur", "ES");
        Aluno aluno02 = new Aluno(2, 111222, "Mariane", "ED.FISICA");

        Disciplina dp01 = new Disciplina(10, "POO", "Daniel");

        dp01.matricularAluno(aluno01);
        dp01.matricularAluno(aluno02);

        Avaliacao prova01 = dp01.criarAvaliacao(1, "Prova Semestral");

        prova01.adicionarQuestao(1, 6, "Por que você ainda insiste em estar aqui?");
        prova01.adicionarQuestao(2, 2, "Sim ou não?");
        prova01.adicionarQuestao(3, 2, "Você esta tomando nota das aulas?");

        System.out.println(dp01.toString());
    }
}
