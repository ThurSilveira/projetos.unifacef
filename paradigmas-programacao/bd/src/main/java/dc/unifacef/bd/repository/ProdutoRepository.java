package dc.unifacef.bd.repository;
import dc.unifacef.bd.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

    // a interface tera disponivel os seguintes metodos
    // Find all() --> select * from produto
    // FindById() --> select * from produto where id
    // save --> insert into produto ou update produto set
    // deleteById(Id) --> delete from produto where id = ..
}
