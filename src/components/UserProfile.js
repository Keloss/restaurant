import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TableCarousel from './TableCarousel';


const UserProfile = () => {
  // Состояние для хранения данных пользователя
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    date_birthday: '',
    phone: '',
  });

  const [bookData, setBookData] = useState({
    date: '',
    time: '',
    count_people: '',
    table: '',
  })

  const [tables, setTables] = useState([
    { id: 1, booking: '' },
    { id: 2, booking: '' },
    { id: 3, booking: '' },
    { id: 4, booking: '' },
    { id: 5, booking: '' },
    { id: 6, booking: '' },
    { id: 7, booking: '' },
    { id: 8, booking: '' },
    { id: 9, booking: '' },
    { id: 10, booking: '' },
  ])

  const [selectedItem, setSelectedItem] = useState(null)

  const handleSelect = (id) => {
    console.log(id)
    setSelectedItem(id)
  }

  // Загружаем данные из localStorage при первом рендере компонента
  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  // Обработчик изменения input полей
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));

    setBookData(prevState => {
      if (name === 'count_people') {
        // Преобразуем значение в число
        const newValue = parseInt(value, 10);

        // Проверяем, что значение находится в допустимом диапазоне
        if (newValue < 1 || newValue > 20) {
            alert('Количество человек должно быть от 1 до 10.');
            return prevState; // Возвращаем предыдущее состояние, если значение недопустимо
        }
    }

    return {
      ...prevState,
      [name]: value,
  };
  }
    )
  };

  // Обработчик сохранения настроек
  const handleSave = () => {
    // Сохраняем данные в localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    alert(`Настройки сохранены!\nИмя: ${userData.name}\nАдрес: ${userData.address}\nТелефон: ${userData.phone}\nДата рождения: ${userData.date_birthday}`);
  };

  const handleBooking = () => {
    setTables(prev => prev.map(table => table.id === selectedItem ? {...table, booking: true} : table))
    alert(`Стол забронирован!\nВаше имя: ${userData.name}\nДата: ${bookData.date}\nВремя: ${bookData.time}\nКоличество человек: ${bookData.count_people}\nНомер стола: ${selectedItem}`);
  };

  const handleTable = () => {
    bookData.table = tables.id
  } 

//   const tables = [
//     { id: 1, booking: '' },
//     { id: 2, booking: '' },
//     { id: 3, booking: '' },
//     { id: 4, booking: '' },
//     { id: 5, booking: '' },
//     { id: 6, booking: '' },
//     { id: 7, booking: '' },
//     { id: 8, booking: '' },
//     { id: 9, booking: '' },
//     { id: 10, booking: '' },
// ];

  let [booking, setBooking] = useState(false)

  return (
    <div className='main_container_lk'>
      <div className='container_1'>
        <h2 className='header_user'>Профиль</h2>
        <form>
          <div className='inputGroup'>
            <label className='label'>
              Имя:
              <input 
                type="text" 
                name="name" 
                value={userData.name} 
                onChange={handleChange} 
                className='input'
              />
            </label>
          </div>
          <div className='inputGroup'>
            <label className='label'>
              Адрес:
              <input 
                type="text" 
                name="address" 
                value={userData.address} 
                onChange={handleChange} 
                className='input'
              />
            </label>
          </div>
          <div className='inputGroup'>
            <label className='label'>
              Телефон:
              <input 
                type="text" 
                name="phone" 
                value={userData.phone} 
                onChange={handleChange} 
                className='input'
              />
            </label>
          </div>
          <div className='inputGroup'>
            <label className='label'>
              Дата рождения:
              <input 
                type="date" 
                name="date_birthday" 
                value={userData.date_birthday} 
                onChange={handleChange} 
                className='input'
              />
            </label>
          </div>
          <button className='button_save' type="button" onClick={handleSave}>Сохранить настройки</button>
        </form>
      </div>
      <div className='container_2'>
        <h2 className='header_user'>Бронирование стола</h2>
        <form>
          <div className='inputGroup'>
            <label className='label'>
              Имя:
              <input 
                type="text" 
                name="name" 
                value={userData.name} 
                onChange={handleChange} 
                className='input'
              />
            </label>
          </div>
          <div className='inputGroup'>
            <label className='label'>
              Дата:
              <input 
                type="date" 
                name="date" 
                value={bookData.date} 
                onChange={handleChange} 
                className='input'
              />
            </label>
          </div>
          <div className='inputGroup'>
            <label className='label'>
              Время:
              <input 
                type="time" 
                name="time" 
                value={bookData.time} 
                onChange={handleChange} 
                className='input'
              />
            </label>
          </div>
          <div className='inputGroup'>
            <label className='label'>
              Количество человек:
              <input 
                type="number" 
                name="count_people" 
                value={bookData.count_people} 
                onChange={handleChange} 
                className='input'
              />
            </label>
          </div>
          <div>
            <TableCarousel tables={tables} onSelect={handleSelect} selectedItem={selectedItem}/>
          </div>
          <button className='button_save' type="button" onClick={handleBooking}>Забронировать</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
