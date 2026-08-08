public class TestarArCondicionado {

    public static void main(String[] args) {

        ArCondicionado ar1 = new ArCondicionado("LG", "Dual Inverter", 24);

        ar1.ligar();

        ar1.setTemperatura(22);

        ar1.ativarModoTurbo();

        ar1.desligar();

        ar1.ligar();

        ar1.setTemperatura(18);

        System.out.println(ar1.toString());
    }
}