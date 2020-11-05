CREATE TABLE `Exercises` (
 `exercise_name` varchar(32) NOT NULL,
 `exercise_id` int(3) NOT NULL AUTO_INCREMENT,
 PRIMARY KEY (`exercise_id`),
 UNIQUE KEY `exercise_name` (`exercise_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1

CREATE TABLE `UserExerciseStats` (
 `username` varchar(32) NOT NULL,
 `monthly_time_spent` varchar(16) NOT NULL,
 `todays_intensity` varchar(32) NOT NULL,
 `yesterdays_intensity` varchar(32) NOT NULL,
 `exercise_history` varchar(256) NOT NULL,
 `frequent_location` varchar(16) NOT NULL,
 `frequent_exercise` varchar(16) NOT NULL,
 UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1

CREATE TABLE `UserExerciseData` (
 `exercise_id` int(3) NOT NULL,
 `username` varchar(32) NOT NULL,
 `time_spent` varchar(16) NOT NULL,
 `intensity` varchar(16) DEFAULT NULL,
 `liked_by` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1


CREATE TABLE `UserSocialData` (
 `username` varchar(32) NOT NULL,
 `frequent_liker` varchar(32) NOT NULL,
 `frequently_liked` varchar(32) NOT NULL,
 `following` varchar(128) NOT NULL,
 `followers` varchar(128) NOT NULL,
 `follow_requests` varchar(64) NOT NULL,
 `suggested_follows` varchar(64) NOT NULL,
 UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
