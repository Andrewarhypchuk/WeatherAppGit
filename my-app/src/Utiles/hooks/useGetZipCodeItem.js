import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/currentWeatherItemsReducer";


const useGetZipCodeItem = () =>{
 
    const dispatch = useDispatch()
    dispatch(addItem({b:2}))
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=5a4b2d457ecbef9eb2a71e480b947604')
	.then(response => {
        response.json()  
        dispatch(addItem(response.json()))
    })
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
export default useGetZipCodeItem;