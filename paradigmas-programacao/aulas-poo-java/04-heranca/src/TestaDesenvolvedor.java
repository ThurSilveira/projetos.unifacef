public class TestaDesenvolvedor {
    public static void exibir(Desenvolvedor camaleao){
        camaleao.codar();
        System.out.println(camaleao + " Bonus " + camaleao.calcularBonus());
    }

    public static void main(String[] args){

        Junior jr1 = new Junior("Clebin", "PHP", 2000, "Carlão");
        exibir(jr1);

        Pleno p1 = new Pleno("Carlão", "Java", 5000, 3);
        exibir(p1);

        Senior s1 = new Senior("Arthur", "Cobol", 9000, 10000);
        exibir(s1);

    }
}
