package sn.esp.intervention.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import sn.esp.intervention.domain.Materiel;

/**
 * Spring Data SQL repository for the Materiel entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MaterielRepository extends JpaRepository<Materiel, Long> {}
