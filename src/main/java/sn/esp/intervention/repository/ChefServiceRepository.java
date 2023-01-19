package sn.esp.intervention.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import sn.esp.intervention.domain.ChefService;

/**
 * Spring Data SQL repository for the ChefService entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ChefServiceRepository extends JpaRepository<ChefService, Long> {}
