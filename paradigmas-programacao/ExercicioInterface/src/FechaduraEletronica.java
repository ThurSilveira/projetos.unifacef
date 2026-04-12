public class FechaduraEletronica implements Autenticavel, DispositivoLigavel {
    private String senhaCorreta;
    private boolean autenticado;
    private boolean destrancada;

    public FechaduraEletronica(String senhaCorreta) {
        this.senhaCorreta = senhaCorreta;
        this.autenticado = false;
        this.destrancada = false;
    }

    public String getSenhaCorreta() {
        return senhaCorreta;
    }

    public void setSenhaCorreta(String senhaCorreta) {
        this.senhaCorreta = senhaCorreta;
    }

    public boolean isAutenticado() {
        return autenticado;
    }

    public boolean isDestrancada() {
        return destrancada;
    }

    @Override
    public void validarAcesso(String senha) {
        if (senhaCorreta.equals(senha)) {
            autenticado = true;
            System.out.println("Senha válida. Acesso autorizado.");
        } else {
            autenticado = false;
            System.out.println("Senha inválida. Acesso negado.");
        }
    }

    @Override
    public void ligar() {
        if (autenticado) {
            destrancada = true;
            System.out.println("Fechadura destrancada (ligada).");
        } else {
            System.out.println("Não é possível destrancar: autentique-se primeiro.");
        }
    }

    @Override
    public void desligar() {
        destrancada = false;
        System.out.println("Fechadura trancada (desligada).");
    }

    @Override
    public String toString() {
        return "FechaduraEletronica{" +
                "senhaCorreta='" + senhaCorreta + '\'' +
                ", autenticado=" + autenticado +
                ", destrancada=" + destrancada +
                '}';
    }
}