public class Junior extends Desenvolvedor {
    private String mentor;

    public Junior(){
        super();
    }
    public Junior(String nome, String linguagem, float salario, String mentor) {
        super(nome, linguagem, salario);
        this.mentor = mentor;
    }


}