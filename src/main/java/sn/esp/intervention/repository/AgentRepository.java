package sn.esp.intervention.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import sn.esp.intervention.domain.Agent;

/**
 * Spring Data SQL repository for the Agent entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AgentRepository extends JpaRepository<Agent, Long> {}
