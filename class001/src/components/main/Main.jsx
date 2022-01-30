import { Sumar, Restar } from '../helpers/Helper';

const Main = () => {
  const suma = Sumar(15, 40);
  const resta = Restar(15, 40);
  return (
    <>
      <h3>Hola.... la suma es: { suma } </h3>
      <h3>Hola.... la resta es: { resta } </h3>
    </>
  );
}

export default Main;