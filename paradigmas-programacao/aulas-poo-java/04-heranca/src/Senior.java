public class Senior extends Desenvolvedor {
    private float verbaLideranca;

    public Senior() {
        super();
    }
    public Senior(String nome, String linguagem, float salario, float verbaLideranca) {
        super(nome, linguagem, salario);
        this.verbaLideranca = verbaLideranca;
    }

    public float getVerbaLideranca() {
        return verbaLideranca;
    }
    public void setVerbaLideranca(float verbaLideranca) {
        this.verbaLideranca = verbaLideranca;
    }

    @Override
    public String toString() {
        return "Senior{" +
                super.toString() +
                "verbaLideranca=" + verbaLideranca +
                '}';
    }

    @Override
    public void codar(){
        System.out.println("Sênior desenhando a arquitetura, e, orientando a equipe.");
    }

    @Override
    public float calcularBonus(){
        return super.calcularBonus() + 4000;
    }

}
