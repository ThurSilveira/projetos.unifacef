public class Email extends Notifications {
    private String assunto;

    public Email(){
        super();
    }
    public Email(String destinatario, String mensagem, String assunto) {
        super(destinatario, mensagem);
        this.assunto = assunto;
    }

    public void enviar(){
        System.out.println("Enviando E-mail para " +
                destinatario +
                " com o assunto " + assunto + ":" + mensagem);
    }

    public String getAssunto() {
        return assunto;
    }
    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }

    @Override
    public String toString() {
        return "Email{" +
                super.toString() +
                "assunto='" + assunto + '\'' +
                '}';
    }
}
