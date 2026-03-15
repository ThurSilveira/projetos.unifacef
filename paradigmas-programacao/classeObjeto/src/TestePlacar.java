public class TestePlacar {
    public static void main(String[] args) {

        Placar jogo = new Placar("Lakers", "Celtics");

        System.out.println(jogo);

        jogo.registrarPonto("casa", 2);
        jogo.registrarPonto("visitante", 3);
        jogo.registrarPonto("casa", 1);

        System.out.println(jogo);

        jogo.proximoQuarto();
        jogo.proximoQuarto();

        System.out.println(jogo);

        jogo.registrarPonto("visitante", 2);
        jogo.registrarPonto("visitante", 3);

        System.out.println(jogo);

        jogo.proximoQuarto();
        jogo.proximoQuarto();

        System.out.println(jogo);
    }
}
