public class TesteVeiculos {
    public static void main(String[] args) {
        Aviao aviao = new Aviao("Embraer", "E195", 850.0f, 12000.0f);
        CarroEletrico carro = new CarroEletrico("BYD", "Seal", 180.0f, 520);

        Veiculo v;

        v = aviao;
        v.mover();

        v = carro;
        v.mover();

        System.out.println(aviao.toString());
        System.out.println(carro.toString());
    }
}