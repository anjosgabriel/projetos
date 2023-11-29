import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 10,
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  quantidade: {
    fontSize: 16,
    marginBottom: 10,
  },
  botaoCarrinho: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
