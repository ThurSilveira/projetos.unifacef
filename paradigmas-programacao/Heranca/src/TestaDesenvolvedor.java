public class TestaDesenvolvedor {
    public static void exibir(Desenvolvedor camaleao){
        camaleao.codar(); // polimorfismo
        System.out.println(camaleao.toString() + "Bonus " + camaleao.calcularBonus()); // polimorfismo
    }

    public static void main(String[] args){

        // criando dev junior
        Junior jr1 = new Junior("Clebin", "PHP", 2000, "Carlão");
        exibir(jr1);

        // criando pleno
        Pleno p1 = new Pleno("Carlão", "Java", 5000, 3);
        exibir(p1);

        // criando senior
        Senior s1 = new Senior("Arthur", "Cobol", 9000, 10000);
        exibir(s1);

    }
}
