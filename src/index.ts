import app from './app';
import postProduct from './models';

const PORT = 3001;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

async function main() {
  const products = await postProduct.insertProduct();
  console.log(products);
}
main({
  name: 'Espada longa',
  amount: '30 peças de ouro',
});

export default server;
