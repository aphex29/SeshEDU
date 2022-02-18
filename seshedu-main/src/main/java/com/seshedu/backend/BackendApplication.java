package com.seshedu.backend;

import com.seshedu.backend.education.Education;
import com.seshedu.backend.education.EducationRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@SpringBootApplication
public class BackendApplication {

	/**
	 * Link to access H2 console: http://localhost:8080/h2-console
	 */
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(EducationRepository educationRepo) {
		return args -> {
			Education ed1 = new Education(2L, "DePaul University", "Bachelor of Science", "Computer Science", 2018, 2022);
			Education ed2 = new Education(2L, "DePaul University", "Master", "Computer Science", 2022, 2024);
			educationRepo.save(ed1);

			Education result = educationRepo.findById(1L).orElseThrow(() -> new EntityNotFoundException("" + 1L));
			System.out.println(result);

			Education result2 = educationRepo.findById(1L).orElseThrow(() -> new EntityNotFoundException("" + 1L));
			result2.setSchool("Loyola University");
			educationRepo.save(result2);

			List<Education> result3 = educationRepo.findByUserId(2L).orElseThrow(() -> new EntityNotFoundException("" + 2L));




//			educationRepo.save(ed2);
//

//			List<Education> result2 = educationRepo.findByUserId(2L).orElseThrow(() -> new EntityNotFoundException("" + 2L));
//			System.out.println("result: " + result);
//			System.out.println("result.school: " + result.getSchool());
//			System.out.println("result2: " + result2);
//
//			// Updating database
//			result.setSchool("Loyola University");
//			educationRepo.save(result);
//
//			result = educationRepo.findById(1L).orElse(null);
//			System.out.println("new result: " + result);
//
//			int edDatabaseSize = educationRepo.findAll().size();
//			System.out.println("education database size " + edDatabaseSize); // 2




		};
	}
}
