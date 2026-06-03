package dc.unifacef.bd.service;
import dc.unifacef.bd.model.Produto;
import dc.unifacef.bd.repository.ProdutoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

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

    //inserir um produto
    public Produto salvar(Produto produto){
        return repo.save(produto); // vai inserir pois produto nao tem id, serve para inserir e salvar
    }

    public boolean remover(Long id){
        if (repo.existsById(id)){
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    // atualiza produto
    public Produto atualizar(Long id, Produto atual){
        if (repo.existsById(id)){
            atual.setId(id);
            return repo.save(atual); // atualiza pois tem id
        }
        return null;
    }


}
