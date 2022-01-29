import { Sumar, Restar } from '../helpers/Helper';

const Main = () => {
  const suma = Sumar(15, 40);
  const resta = Restar(15, 40);
  return (
    <>
      <h1>Hola.... la suma es: { suma } </h1>
      <h1>Hola.... la resta es: { resta } </h1>
    </>
  );
}

export default Main;