import java.time.LocalDate;

public class TesteBiblioteca {
    public static void main(String[] args) {

        Leitor leitor = new Leitor(1, "Millie");
        Livro livro = new Livro(1, "Nosso Lar", "Chico Xavier");

        Emprestimo emprestimo = new Emprestimo(
                LocalDate.now(),
                LocalDate.now().plusDays(7),
                leitor,
                livro
        );

        System.out.println("EMPRÉSTIMO");
        System.out.println(emprestimo);
    }
}