public class TestaConta {
    public static void main(String[] args){
        Conta c1 = new Conta(1, 1, "João Silva");
        c1.depositar(500);
        c1.sacar(200);
        System.out.println(c1.toString());

        Conta c2 = new Conta(2, 1, "Maria Souza");
        c2.sacar(50);

        c1.encerrarConta();
        c1.sacar(300);
        c1.encerrarConta();
        System.out.println(c1.toString());
    }
}