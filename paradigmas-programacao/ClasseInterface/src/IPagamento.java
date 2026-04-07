public interface IPagamento {
    void autorizar(float valor);
    void exibirComprovante();
}
