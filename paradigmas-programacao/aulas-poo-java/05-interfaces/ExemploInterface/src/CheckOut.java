public class CheckOut {
    public static void main(String[] args){
        IPagamento seletor;

        seletor = new CartaoCredito("12311231");
        seletor.autorizar(600);
        seletor.exibirComprovante();

        seletor = new Pix("45126361273");
        seletor.autorizar(600);
        seletor.exibirComprovante();
        

    }
}
