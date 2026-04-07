public class WhatsApp extends Notifications {
    private String status;

    public WhatsApp() {
        super();
    }
    public WhatsApp(String destinatario, String mensagem) {
        super(destinatario, mensagem);
    }

    public void enviar(){
        System.out.printf("Enviando Zap para " + destinatario +
                "Mensagem" + mensagem + ".");
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "WhatsApp{" +
                super.toString() +
                "status='" + status + '\'' +
                '}';
    }
}
