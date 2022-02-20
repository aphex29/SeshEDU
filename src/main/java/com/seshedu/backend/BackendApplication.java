package com.seshedu.backend;

import com.seshedu.backend.course.CourseRepository;
import com.seshedu.backend.course.CourseService;
import com.seshedu.backend.education.Education;
import com.seshedu.backend.education.EducationRepository;
import com.seshedu.backend.hobby.Hobby;
import com.seshedu.backend.hobby.HobbyRepository;
import com.seshedu.backend.user.person.PersonService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.seshedu.backend.account.UserAccount;
import com.seshedu.backend.account.UserAccountRepository;
import com.seshedu.backend.account.UserAccountService;
import javax.persistence.EntityNotFoundException;
import com.seshedu.backend.user.person.PersonRepository;


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
	CommandLineRunner commandLineRunner(PersonRepository pRepo, EducationRepository educationRepo, HobbyRepository hobbyRepo) {
		return args -> {
			PersonService ps = new PersonService(pRepo);
			ps.createPerson("pmarkows","Patrick Markowski", "pm@depaul.edu", "1234", "Chicago", "Illinois");
			ps.createPerson("abc","John Smith", "jsmith@depaul.edu", "4521", "Chicago", "Illinois");
			ps.createPerson("def","Johnny Seed", "jseed@depaul.edu", "2121", "Chicago", "Illinois");
			ps.createPerson("bvn","Jane Doe", "jdoe@depaul.edu", "f6745", "Naperville", "Illinois");
			System.out.println(ps.getNearbyPeople("pmarkows", "Chicago"));
			ps.updateName("pmarkows", "Thomas Jefferson");
			ps.updateCity("pmarkows", "Naperville");
			ps.updateUsername("pmarkows", "tjefferson");
			ps.updateEmail("tjefferson", "tjefferson@depaul.edu");
			System.out.println(ps.getNearbyPeople("tjefferson", "Naperville"));

			hobbyRepo.save(new Hobby(1L, "Hiking"));
			hobbyRepo.save(new Hobby(1L, "Running"));
			hobbyRepo.save(new Hobby(1L, "Piano"));



			/*
			CourseService cs = new CourseService(courseRepo);
			cs.addCourse(5L,"Intro to Java");
			cs.addCourse(5L,"Compiler Design");
			cs.addCourse(6L, "Intro to Java");
			cs.addCourse(6L,"Compiler Design");
			System.out.println(cs.getCourses(5L));
			cs.deleteCourse(1L);
			System.out.println(cs.getCourses(5L));
			*/
		/*
			UserAccount ua1 = new UserAccount(2L, "pm@depaul.edu", "pmarkows", "1234");
			UserAccount ua2 = new UserAccount(3L, "ab@depaul.edu", "abOS", "5678");
			UserAccount ua3 = new UserAccount(4L, "cd@depaul.edu", "cdOS", "1809");
			userRepo.save(ua1);
			userRepo.save(ua2);
			userRepo.save(ua3);
			UserAccount up1 = userRepo.findByUserId(2L)
					.orElseThrow(() -> new EntityNotFoundException("" + 2L));
			up1.setPassword("abcdefh");
			userRepo.save(up1);
			System.out.println(up1);
			UserAccountService uas = new UserAccountService(userRepo);
			uas.deleteAccount(1L);
			uas.updatePassword(2L, "query");
			if (uas.verifyAccount(3L, "a@depaul.edu", "query")) System.out.println("Account verified");
			else System.out.println("Account not verified");
		*/



			Education ed1 = new Education(2L, "DePaul University", "Bachelor of Science", "Computer Science", 2018, 2022);
			Education ed2 = new Education(2L, "DePaul University", "Master", "Computer Science", 2022, 2024);
			educationRepo.save(ed1);
			Education result = educationRepo.findById(1L).orElseThrow(() -> new EntityNotFoundException("" + 1L));
			System.out.println(result);
			Education result2 = educationRepo.findById(1L).orElseThrow(() -> new EntityNotFoundException("" + 1L));
			result2.setSchool("Loyola University");
			educationRepo.save(result2);
			educationRepo.save(ed2);
			List<Education> result3 = educationRepo.findByUserId(2L).orElseThrow(() -> new EntityNotFoundException("" + 2L));

			System.out.println(result3);

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