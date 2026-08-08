import java.time.LocalDateTime;

public class TesteCinema {
    public static void main(String[] args) {

        Filme filme1 = new Filme(1, "Batman", "Ação", 180);
        Sessao sessao = new Sessao(1,
                LocalDateTime.of(2026, 7, 20, 20, 0),
                1);

        sessao.vincularFilme(filme1);

        sessao.venderIngresso(1, "A1", "Inteira", 30);
        sessao.venderIngresso(2, "A2", "Meia", 15);
        sessao.venderIngresso(3, "A3", "Inteira", 30);

        System.out.println(sessao);
    }
}
