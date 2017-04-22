package jobdetails.repository;

import jobdetails.domain.Previousjobs;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Previousjobs entity.
 */
@SuppressWarnings("unused")
public interface PreviousjobsRepository extends JpaRepository<Previousjobs,Long> {

}
