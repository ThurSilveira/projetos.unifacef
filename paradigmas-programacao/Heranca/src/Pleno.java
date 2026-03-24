public class Pleno extends Desenvolvedor{
    private int projetosEntregues;

    public Pleno() {
        super();
    }
    public Pleno(String nome, String linguagem, float salario, int projetosEntregues) {
        super(nome, linguagem, salario);
        this.projetosEntregues = projetosEntregues;
    }

    public int getProjetosEntregues() {
        return projetosEntregues;
    }
    public void setProjetosEntregues(int projetosEntregues) {
        this.projetosEntregues = projetosEntregues;
    }

    @Override
    public String toString() {
        return "Pleno{" +
                super.toString() +
                "projetosEntregues=" + projetosEntregues +
                '}';
    }

    @Override
    public void codar(){
        System.out.println("Pleno desenvoldendo e fazendo Code Review");
    }

    @Override
    public float calcularBonus(){
        return super.calcularBonus() + 2000;
    }
}
