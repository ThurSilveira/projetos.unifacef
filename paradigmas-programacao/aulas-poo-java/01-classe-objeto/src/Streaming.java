public class Streaming {

    public String usuario;
    public enum Plano {
        Basico(25.90f),
        Premium(45.90f),
        Familia(60.90f);

        private float valor;

        Plano(float valor){
            this.valor = valor;
        }

        public float getValor(){
            return valor;
        }
    }
    private final Plano plano;
    public float mensalidade;
    public boolean status;
    public String ultimoFilmeAssistido;

    public Streaming(String usuario, Plano plano){
        this.usuario = usuario;
        this.plano = plano;
        this.mensalidade = plano.getValor();
        this.status = true;
        this.ultimoFilmeAssistido = "";
    }

    public void assistirFilme(String nomeFilme){
        if (!status){
            System.out.println("Pagamento pendente na conta, pague para assistir mais filmes!");
            return;
        }
        if (nomeFilme == null || nomeFilme.isEmpty()){
            System.out.println("Nome do filme inválido!");
            return;
        }
        this.ultimoFilmeAssistido = nomeFilme;
        System.out.println("Assistindo: " + nomeFilme);
    }

    public void cancelarAssinatura(){
        if (!status){
            System.out.println("Conta já desativada!");
            return;
        }
        this.status = false;
        System.out.println("Conta desativada, até breve!");
    }

    @Override
    public String toString(){

        String situacao;
        if (status){
            situacao = "Ativo";
        } else {
            situacao = "Suspenso";
        }

        return "Usuário: " + usuario +
                "\nPlano: " + plano +
                "\nMensalidade: R$" + mensalidade +
                "\nStatus: " + situacao +
                "\nÚltimo filme: " + ultimoFilmeAssistido;
    }
}
