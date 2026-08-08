public abstract class Notifications {
    protected String destinatario;
    protected String mensagem;

    public Notifications(){}
    public Notifications(String destinatario, String mensagem) {
        this.destinatario = destinatario;
        this.mensagem = mensagem;
    }

    public abstract void enviar();

    public String getDestinatario() {
        return destinatario;
    }
    public void setDestinatario(String destinatario) {
        this.destinatario = destinatario;
    }

    public String getMensagem() {
        return mensagem;
    }
    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    @Override
    public String toString() {
        return "Notifications{" +
                "destinatario='" + destinatario + '\'' +
                ", mensagem='" + mensagem + '\'' +
                '}';
    }
}
