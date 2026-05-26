package dc.unifacef.ExemploMemoria.service;
import dc.unifacef.ExemploMemoria.model.Produto;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class ProdutoService {
    // Vetor de Produtos
    ArrayList<Produto> produtos = new ArrayList<>();
    public ArrayList<Produto> listar(){
        return this.produtos;
    }

   // Contador
    private long contador = 1;

    // Metodo criar
    public Produto criar(Produto produto) {
        produto.setId(contador);
        contador++;
        this.produtos.add(produto);
        return produto;
    }

    public boolean remove(Long id){
        return produtos.removeIf(p -> p.getId().equals(id));
    }

    public Produto atualiza(Long id, Produto novo){
        novo.setId(id);
        for(int i = 0; i < produtos.size(); i++){
            if(produtos.get(i).getId().equals(id)){
                return novo;
            }
        }
        return null;
    }
}
