import {Header} from '../../components/Header';
import api from '../../services/api';
import {Food} from '../../components/Food';
import {ModalAddFood} from '../../components/ModalAddFood';
import {ModalEditFood} from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';
import { useEffect, useState } from 'react';
import { AddFoodType, FoodType } from '../../@types';


export const Dashboard = () => {
  
  const [foods , setFoods] = useState<FoodType[]>([]);
  const [modal , setModal] = useState(false);
  const [editModalOpen , setEditModalOpen] = useState(false);
  const [editingFood , setEditingFood] = useState({} as AddFoodType);

  useEffect(() => {
    const LoadFoods = async() => {
      const response = await api.get('/foods');
      setFoods(response.data);
    };
    LoadFoods();
  },[]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  const handleEditFood = (food: AddFoodType) => {
    setEditModalOpen(true);
    setEditingFood(food);
  }

  const handleAddFood = async(food:AddFoodType) => {
    try {
      const tempFood = [...foods];
      
      const response = await api.post('/foods', {
        ...food,
        available:true,
      });

      tempFood.push(response.data);
      setFoods(tempFood);
    }catch{
      
    }
  };

  const handleUpdateFood = async(food:AddFoodType) => {
    try {
      const foodUpdated = await api.put(`/foods/${editingFood.id}`,{ ...editingFood, ...food });
      const foodsUpdated = foods.map(item => item.id !== foodUpdated.data.id ? item : foodUpdated.data);
      setFoods(foodsUpdated);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteFood = async(id:number) => {
    await api.delete(`/foods/${id}`);
    const foodsFiltered = foods.filter(food => food.id !== id);
    setFoods(foodsFiltered);
  };
  
  
  return(
    <>
      <Header openModal={toggleModal} />
      
      <ModalAddFood
        isOpen={modal}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
          {foods &&
            foods.map((item) => (
              <Food
                key={item.id}
                food={item}
                handleDelete={handleDeleteFood}
                handleEditFood={handleEditFood}
              />
          ))}
      </FoodsContainer>
    
    </>
  );
}
