public class Junior extends Desenvolvedor {
    private String mentor;

    public Junior(){
        super();
    }
    public Junior(String nome, String linguagem, float salario, String mentor) {
        super(nome, linguagem, salario);
        this.mentor = mentor;
    }

    public String getMentor() {
        return mentor;
    }
    public void setMentor(String mentor) {
        this.mentor = mentor;
    }

    @Override
    public String toString() {
        return "Junior{" +
                super.toString() +
                "mentor='" + mentor + '\'' +
                '}';
    }

    @Override
    public void codar(){
        System.out.println("Júnior desenvolvendo código sob a mentoria de " + mentor);
    }

}