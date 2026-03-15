public class TestaCarro { // aciona o JDK compila + interpreta
    public static void main(String[] args){
        // cria uma instancia da classe carro (objeto)
        Carro obj1 = new Carro("Fiat", "Uno");
        //exibir dados
        System.out.println(obj1.toString());
        obj1.ligar();
        obj1.acelerar(80);
        obj1.frear(20);

        Carro obj2 = new Carro("Hyundai", "Creta");
        System.out.println(obj2.toString());


        Carro obj3 = new Carro("Ferrari", "Puro Sangue");
        System.out.println(obj3.toString());


    }
}
