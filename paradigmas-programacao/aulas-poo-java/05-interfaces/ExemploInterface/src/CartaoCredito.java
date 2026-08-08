public class CartaoCredito implements IPagamento {
    private String nroCartao;

    public CartaoCredito(String nroCartao) {
        this.nroCartao = nroCartao;
    }

    public String getNroCartao() {
        return nroCartao;
    }
    public void setNroCartao(String nroCartao) {
        this.nroCartao = nroCartao;
    }

    @Override
    public void autorizar(float valor){
        System.out.println("Verificando limite do cartão " + nroCartao);
        System.out.println("Pagamento de R$ " + valor + " autorizado via credito");
    }

    @Override
    public void exibirComprovante(){
        System.out.println("Comprovante enviado para o email");
    }
}
