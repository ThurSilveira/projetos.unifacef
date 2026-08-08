public class TestaCarro {
    public static void main(String[] args){
        Carro obj1 = new Carro("Fiat", "Uno");
        System.out.println(obj1);
        obj1.ligar();
        obj1.acelerar(80);
        obj1.frear(20);

        Carro obj2 = new Carro("Hyundai", "Creta");
        System.out.println(obj2);


        Carro obj3 = new Carro("Ferrari", "Puro Sangue");
        System.out.println(obj3);


    }
}
