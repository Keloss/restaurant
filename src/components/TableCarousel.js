import React, { useState } from 'react';
import Slider from 'react-slick';

const TableCarousel = ({ tables, onSelect, selectedItem }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Количество отображаемых слайдов
        slidesToScroll: 1,
        centerMode: true, // Включаем центрирование
        centerPadding: '0px', // Убираем отступы по бокам
    };

    return (
        <Slider {...settings}>
            {tables.map((table) => (
                <div key={table.id} className={`table-item ${table.id === selectedItem || table.booking ? 'active' : ''}`} onClick={() => onSelect(table.id)} >
                    <h3>{`${table.id}`}</h3>
                </div>
            ))}
        </Slider>
    );
};

export default TableCarousel;
