/*
В отдельном файле ts создайте interface Airplane - самолет с полями:
numberOfEngines - количество двигателей
isJet - реактивный
maxHeight - максимальная высота полета
capacity - опциональное поле вместимость
Создайте несколько переменных типа Airplane.
*/

interface Airplane {
  numberOfEngines: number;   // количество двигателей
  isJet: boolean;            // реактивный
  maxHeight: number;         // максимальная высота полета (в метрах)
  capacity?: number;         // опциональное поле вместимость
}

// Примеры переменных типа Airplane
const boeing747: Airplane = {
  numberOfEngines: 4,
  isJet: true,
  maxHeight: 13100,
  capacity: 416,
};

const cessna172: Airplane = {
  numberOfEngines: 1,
  isJet: false,
  maxHeight: 4000,
};

const mig29: Airplane = {
  numberOfEngines: 2,
  isJet: true,
  maxHeight: 18000,
  capacity: 1,
};