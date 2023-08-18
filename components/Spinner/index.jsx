import { Loader } from './styles'

const Spinner = () => {
  const numberOfDivs = 12; 

  const divElements = Array.from({ length: numberOfDivs }, (_, index) => (
    <div key={index}></div>
  ));

  return <Loader>{divElements}</Loader>
}

export default Spinner