package com.athikomvorapat.radium_sample;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.athikomvorapat.radium_sample")
public class PersistenceConfig {

}
