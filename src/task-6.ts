// Задача 6

interface User {
    name: string;
    readonly address: UserAddress;
}
interface UserAddress {
    city: string;
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv"
  }
};

console.log(user.address?.city);

// Завдання:

// Створіть тип для user.
// Зробіть address необов’язковим.
// Перевірте, що user.address?.city не викликає помилки.
