public class TesteStreaming {
    public static void main(String[] args) {

        Streaming user1 = new Streaming("Arthur", Streaming.Plano.Premium);

        System.out.println(user1);

        user1.assistirFilme("Interestelar");

        System.out.println(user1);

        user1.cancelarAssinatura();

        user1.assistirFilme("Matrix");

        System.out.println(user1);
    }
}
