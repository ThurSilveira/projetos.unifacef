package dc.unifacef.bd.service;
import dc.unifacef.bd.model.Produto;
import dc.unifacef.bd.repository.ProdutoRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService { // esta classe usura o ProdutoRepository explorando a injeção de dependencia pelo construtor
    private ProdutoRepository repo;
    public ProdutoService(ProdutoRepository repo) {
        this.repo = repo;
    }

    public List<Produto> listar(){ //recupera todos os produtos
        return repo.findAll();
    }

    public Optional<Produto> buscarPorId(Long id){ // recupera um produto por id
        return repo.findById(id);
    }
}
