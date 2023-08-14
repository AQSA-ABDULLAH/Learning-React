import { connect } from "react-redux";
import Home from "../Components/Home";
import { ADD_TO_CART, addToCart } from "../Services/Actions/action";

const mapStateToProps=state => ({

})

const mapDispatchToProps=dispatch=>({
    addToCartHandler: data=> dispatch(addToCart(data))
})
export default connect(mapDispatchToProps, mapStateToProps) (Home);