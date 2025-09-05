package com.example.HotelkManagementSystemm.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HotelkManagementSystemm.entity.ItemEntity;
import com.example.HotelkManagementSystemm.entityDto.ItemDto;
import com.example.HotelkManagementSystemm.repo.ItemRepo;

@Service
public class ItemService {
	
	@Autowired
	ItemRepo itemrepo;
	
	public List<ItemEntity> getAllItems() {
        return itemrepo.findAll();
    }

    public Optional<ItemEntity> getItemById(Long id) {
        return itemrepo.findById(id);
    }

    public String saveItem(ItemDto item) {
    	ItemEntity item1=new ItemEntity();
    	item1.setCategory(item.getCategory());
    	item1.setName(item.getName());
    	item1.setPrice(item.getPrice());
        itemrepo.save(item1);
        return "Item Saved Successfully!";
    }

    public String deleteItem(Long id) {
        itemrepo.deleteById(id);
        return "Item deleted Successfully!";
    }
    
    public String updateItem(long id, ItemEntity upitem) {
    	ItemEntity item = itemrepo.findById(id).get();
    	item.setName(upitem.getName());
    	item.setCategory(upitem.getCategory());
    	item.setPrice(upitem.getPrice());
    	itemrepo.save(item);
    	return " Item Updated Successfully!";
    	
    }
    

}

