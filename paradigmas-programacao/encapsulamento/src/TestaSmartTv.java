public class TestaSmartTv {
    public static void main(String[] args) {

        SmartTv obj2 = new SmartTv("Samsung", "Qled 8k", 50);

        obj2.setAumentarVolume(20);
        obj2.setDiminuirVolume(60);
        System.out.println(obj2.toString());

    }
}
