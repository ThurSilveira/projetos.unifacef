public class Pix implements IPagamento{
    private String pix;

    public Pix(String pix) {
        this.pix = pix;
    }

    public String getPix() {
        return pix;
    }
    public void setPix(String pix) {
        this.pix = pix;
    }

    @Override
    public void autorizar(float valor){
        System.out.println("Gerando QR Code para a chave " + pix);
        System.out.println("Pagamento de R$ " + valor + " transferido de forma instantanea");
    }

    @Override
    public void exibirComprovante(){
        System.out.println("Comprovante disponivel no app do banco");
    }
}
