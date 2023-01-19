package sn.esp.intervention.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.esp.intervention.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
