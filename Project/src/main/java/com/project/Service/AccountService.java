package com.project.Service;

import java.util.List;

import com.project.Entity.Account;



public interface AccountService {
	
 Account findById(String username);

 List<Account> getAdministrators();

 List<Account> findAll();

 Account create(Account account);

 Account update(Account account);

 void delete(String username);

 List<Account> findByUsername(String username);
}
